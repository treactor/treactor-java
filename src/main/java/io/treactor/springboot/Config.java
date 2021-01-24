package io.treactor.springboot;

public class Config {

  public static final Config instance = new Config();

  private int port;

  public Config() {
    String _port = System.getenv("PORT");
    if (_port != null) {
      port = Integer.parseInt(_port);
    } else {
      port = 3330;
    }
  }

  public int getPort() {
    return port;
  }

  public String getFramework() {
    return "java";
  }

  public String getServiceName() {
    String value = System.getenv("SERVICE_NAME");
    if (value != null) {
      return value;
    }
    return "treactor";
  }

  public String getServiceVersion() {
    String value = System.getenv("SERVICE_VERSION");
    if (value != null) {
      return value;
    }
    return "0.0";
  }
}
