package io.treactor.springboot;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.api.trace.TracerProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class TReactorHomeController {

  private final Tracer tracer;

  @Autowired
  public TReactorHomeController() {
    TracerProvider tracerProvider = GlobalOpenTelemetry.getTracerProvider();
    tracer = tracerProvider.get("io.treactor.tracing.java", "0.5");
  }

  @RequestMapping(method = RequestMethod.GET)
  public String index(Model model) {
    //        SpanContext context = tracer..getCurrentSpan().getContext();
    //        model.addAttribute("traceparent", "00-"
    //                + context.getTraceIdAsHexString() + "-"
    //                + context.getSpanIdAsHexString() + "-"
    //                + context.getTraceFlags());
    return "index";
  }
}
