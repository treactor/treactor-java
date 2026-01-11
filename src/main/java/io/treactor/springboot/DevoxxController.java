package io.treactor.springboot;

import static io.treactor.springboot.Const.INSTRUMENTATION_SCOPE_NAME;
import static io.treactor.springboot.Const.INSTRUMENTATION_SCOPE_VERSION;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.SpanKind;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.TracerProvider;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.text.SimpleDateFormat;
import java.util.Random;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/devoxx")
public class DevoxxController {

  private static final Logger LOGGER = LogManager.getLogger();

  private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

  private final Tracer tracer;

  private final DevoxxTask task;

  private final HttpClient httpClient;

  private static final Random random = new Random();

  @Autowired
  public DevoxxController(DevoxxTask task) {
    this.task = task;
    TracerProvider tracerProvider = GlobalOpenTelemetry.getTracerProvider();
    tracer = tracerProvider.get(INSTRUMENTATION_SCOPE_NAME, INSTRUMENTATION_SCOPE_VERSION);
    httpClient = HttpClient.newBuilder().build();
  }

  @GetMapping("/task")
  public String task() {
    Span span = tracer.spanBuilder("task").setSpanKind(SpanKind.INTERNAL).startSpan();
    span.addEvent("Log line");
    LOGGER.atInfo().log("foo");
    task.addTask(random.nextInt(250));
    span.end();
    return "{}";
  }

  @GetMapping("/ping")
  public String ping() throws IOException, InterruptedException {
    Span span = tracer.spanBuilder("ping").setSpanKind(SpanKind.INTERNAL).startSpan();
    LOGGER.atInfo().log("ping");

    HttpRequest request =
        HttpRequest.newBuilder()
            .GET()
            .uri(
                URI.create(
                    System.getenv()
                        .getOrDefault(
                            "EXTERNAL_API_ENDPOINT", "http://localhost:3330/devoxx/pong")))
            .setHeader("User-Agent", "Devoxx Demo")
            .build();
    HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

    span.end();
    return String.format("response is %s", response.body());
  }

  @GetMapping("/pong")
  public String pong() {
    Span span = tracer.spanBuilder("pong").setSpanKind(SpanKind.INTERNAL).startSpan();
    LOGGER.atInfo().log("A totally useless log line... you already have a trace!");
    span.end();
    return "pong";
  }
}
