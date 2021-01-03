package io.treactor.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.protobuf.ProtobufHttpMessageConverter;

@SpringBootApplication
@ServletComponentScan
public class Application {

  public static void main(String[] args) {

    //        TracerSdkProvider tracerProvider = OpenTelemetrySdk.getTracerProvider();
    //        tracerProvider.addSpanProcessor(
    //                SimpleSpanProcessor.newBuilder(
    //                        OtlpGrpcSpanExporter.newBuilder().build()).build());

    SpringApplication.run(Application.class, args);
  }

  @Bean
  ProtobufHttpMessageConverter protobufHttpMessageConverter() {
    ProtobufHttpMessageConverter converter = new ProtobufHttpMessageConverter();
    return converter;
  }
}
