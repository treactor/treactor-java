package io.treactor.springboot;

import io.opentelemetry.api.OpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;
import java.io.IOException;
import javax.servlet.*;

// @WebFilter
public class OTelPageLoadFilter implements Filter {

  private Tracer tracer;

  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
    tracer = OpenTelemetry.getGlobalTracer("treactor");
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {
    Span test = tracer.spanBuilder("test").setSpanKind(Span.Kind.SERVER).startSpan();
    try (Scope scope = test.makeCurrent()) {
      chain.doFilter(request, response);
    } finally {
      test.end();
    }
  }

  @Override
  public void destroy() {}
}
