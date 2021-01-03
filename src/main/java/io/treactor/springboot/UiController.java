package io.treactor.springboot;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UiController {

  private static final Logger LOG = LogManager.getLogger(UiController.class);

  @Autowired
  public UiController() {}

  @GetMapping("/test")
  public String test() {

    LOG.always().log("foobar");
    return "xxx";
  }

  @GetMapping()
  public String index() {
    return "index";
  }
}
