package io.treactor.springboot;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.SpanKind;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.TracerProvider;
import io.treactor.springboot.Elements.Element;
import io.treactor.v1alpha.AtomOuterClass.Atom;
import io.treactor.v1alpha.NodeOuterClass.Node;
import io.treactor.v1alpha.NodeOuterClass.Node.Builder;
import io.treactor.v1alpha.NodeOuterClass.TReactorRequest;
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
    TracerProvider tracerProvider = GlobalOpenTelemetry.getTracerProvider();
    tracer = tracerProvider.get("io.treactor.tracing.java", "0.5");
  }

  @GetMapping("/reactions")
  public String reaction(Model model) {
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(SpanKind.INTERNAL).startSpan();
    span.addEvent("Log line");
    span.end();
    return "{}";
  }

  @GetMapping("/bonds")
  public String orbit(Model model) {
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(SpanKind.INTERNAL).startSpan();
    span.addEvent("Log line");
    span.end();
    return "{}";
  }

  @GetMapping("/atoms/{atom}")
  public Node atom(
      @RequestHeader MultiValueMap<String, String> headers,
      Model model,
      @PathVariable("atom") String atom,
      @RequestParam("symbol") String symbol) {
    Config config = Config.instance;
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(SpanKind.INTERNAL).startSpan();
    span.addEvent("Log line");
    span.end();

    Element element = Elements.instance().bySymbol(symbol);

    TReactorRequest.Builder trRequest = TReactorRequest.newBuilder();
    headers.forEach(
        (key, value) -> {
          trRequest.putHeaders(key, value.stream().collect(Collectors.joining("|")));
        });

    Builder result =
        Node.newBuilder()
            .setName(config.getServiceName())
            .setVersion(config.getServiceVersion())
            .setFramework(config.getFramework())
            .setRequest(trRequest)
            .setAtom(
                Atom.newBuilder()
                    .setName(element.element)
                    .setNumber(element.number)
                    .setSymbol(element.symbol)
                    .setGroup(element.group)
                    .setPeriod(element.period)
                    .build());
    return result.build();
  }

  @GetMapping("/nodes/{number}/info")
  public Node node(
      @RequestHeader MultiValueMap<String, String> headers,
      Model model,
      @PathVariable("number") String number) {
    Config config = Config.instance;

    Element element = Elements.instance().byNumber(number);

    TReactorRequest.Builder trRequest = TReactorRequest.newBuilder();
    headers.forEach(
        (key, value) -> {
          trRequest.putHeaders(key, value.stream().collect(Collectors.joining("|")));
        });

    Builder result =
        Node.newBuilder()
            .setName(config.getServiceName())
            .setVersion(config.getServiceVersion())
            .setFramework(config.getFramework())
            .setRequest(trRequest)
            .setAtom(
                Atom.newBuilder()
                    .setName(element.element)
                    .setNumber(element.number)
                    .setSymbol(element.symbol)
                    .setGroup(element.group)
                    .setPeriod(element.period)
                    .build());
    return result.build();
  }

  @GetMapping("/nodes/{number}/health")
  public String health() {
    return "";
  }

  @GetMapping("/healthz")
  public String healthz() {
    return "";
  }
}
