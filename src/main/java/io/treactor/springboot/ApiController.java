package io.treactor.springboot;

import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
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
  public Node atom(
      @RequestHeader MultiValueMap<String, String> headers,
      Model model,
      @PathVariable("atom") String atom,
      @RequestParam("symbol") String symbol) {
    Config config = Config.instance;
    Span span =
        tracer.spanBuilder("Alex was in Spring Boot!").setSpanKind(Span.Kind.INTERNAL).startSpan();
    try {
      Thread.sleep(500);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    span.addEvent("Done sleeping for 500");
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

  @GetMapping("/about/{number}")
  public Node about(
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
}
