package io.treactor.springboot;

import static io.treactor.springboot.Const.INSTRUMENTATION_SCOPE_NAME;
import static io.treactor.springboot.Const.INSTRUMENTATION_SCOPE_VERSION;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.metrics.*;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.SpanContext;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.TracerProvider;
import io.opentelemetry.instrumentation.annotations.WithSpan;
import java.util.Queue;
import java.util.concurrent.LinkedBlockingQueue;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DevoxxTask {

  private static final Logger LOGGER = LogManager.getLogger();

  private final Tracer tracer;
  private final DoubleHistogram histogram;

  private static final Queue<Task> queue = new LinkedBlockingQueue<>();

  private static class Task {
    SpanContext parent;
    long value;

    public Task(Span current, long value) {
      this.parent = current.getSpanContext();
      this.value = value;
    }
  }

  public DevoxxTask() {
    TracerProvider tracerProvider = GlobalOpenTelemetry.getTracerProvider();
    tracer = tracerProvider.get(INSTRUMENTATION_SCOPE_NAME, INSTRUMENTATION_SCOPE_VERSION);
    MeterProvider meterProvider = GlobalOpenTelemetry.getMeterProvider();
    Meter meter = meterProvider.get(INSTRUMENTATION_SCOPE_NAME);
    histogram = meter.histogramBuilder("devoxx.tasks.duration").build();
  }

  @WithSpan("addTask")
  public void addTask(long value) {
    queue.add(new Task(Span.current(), value));
  }

  @Scheduled(fixedRate = 20000)
  @WithSpan("handleTasks")
  public void handleTasks() throws InterruptedException {
    Span.current().setAttribute("foo", "bar");
    while (true) {
      Task task = queue.poll();
      if (task == null) break;
      Span span = tracer.spanBuilder("process").startSpan().addLink(task.parent);
      try {
        Thread.sleep(task.value);
        histogram.record((double) task.value);
      } finally {
        span.end();
      }
    }
  }
}
