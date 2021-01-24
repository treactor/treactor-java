package io.treactor.springboot;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Elements {

  public Element bySymbol(String symbol) {
    return elementsBySymbol.get(symbol);
  }

  public Element byNumber(String number) {
    return elementsByNumber.get(number);
  }

  public static class Element {
    public int number;
    public String symbol;
    public String element;
    public int group;
    public int period;

    public String origin;
    public String weight;
    public String density;
    public String melt;
    public String boil;
    public String C;
    public String X;
    public String abundance;
    public String property;
  }

  public static class ElementsFile {
    public String source;
    public Element[] elements;
  }

  private static Elements instance;

  private Map<String, Element> elementsBySymbol = new HashMap<>();
  private Map<String, Element> elementsByNumber = new HashMap<>();

  public static Elements instance() {
    if (instance == null) {
      instance = new Elements();
    }
    return instance;
  }

  public Elements() {
    ObjectMapper mapper = new ObjectMapper(new YAMLFactory());
    try {
      ElementsFile elements = mapper.readValue( getClass().getClassLoader().getResourceAsStream("elements.yaml"), ElementsFile.class);
      for (Element element : elements.elements) {
        elementsByNumber.put(String.valueOf(element.number), element);
        elementsBySymbol.put(element.symbol, element);
      }

    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
