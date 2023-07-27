package com.example.springapp.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/agent")
@CrossOrigin
public class AdminController {
  @GetMapping
  public String get() {
    return "GET:: agent controller ";
  }

  @PostMapping
  public String post() {
    return "POST:: agent controller ";
  }

  @PutMapping
  public String put() {
    return "PUT:: agent controller ";
  }

  @DeleteMapping
  public String delete() {
    return "DELETE:: agent controller ";
  }
}
