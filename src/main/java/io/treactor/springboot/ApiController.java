package io.treactor.springboot;

import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import io.treactor.proto.Treactor.Result;
import io.treactor.proto.Treactor.Result.Builder;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/treact")
public class ApiController {

  private final Tracer tracer;

  @Autowired
  public ApiController() {
    tracer = OpenTelemetry.getGlobalTracer("treactor");
  }

  @GetMapping("/split")
  public String split(Model model) {
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(Span.Kind.INTERNAL).startSpan();
    try {
      Thread.sleep(500);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    span.addEvent("Done sleeping for 500");
    span.end();
    return "{}";
  }

  @GetMapping("/orbit")
  public String orbit(Model model) {
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(Span.Kind.INTERNAL).startSpan();
    try {
      Thread.sleep(500);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    span.addEvent("Done sleeping for 500");
    span.end();
    return "{}";
  }

  @GetMapping("/atom/{atom}")
  public Result atom(
      @RequestHeader MultiValueMap<String, String> headers,
      Model model,
      @PathVariable("atom") String atom,
      @RequestParam("symbol") String symbol) {
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(Span.Kind.INTERNAL).startSpan();
    try {
      Thread.sleep(500);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    span.addEvent("Done sleeping for 500");
    span.end();

    Builder result = Result.newBuilder();

    headers.forEach(
        (key, value) -> {
          result.putHeaders(key, value.stream().collect(Collectors.joining("|")));
        });

    result.setName("foobar");

    return result.build();
  }
}
