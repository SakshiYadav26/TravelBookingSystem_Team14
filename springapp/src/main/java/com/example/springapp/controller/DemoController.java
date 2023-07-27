package com.example.springapp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Role;

@RestController
@RequestMapping("/api/v1/demo-controller")
@CrossOrigin
public class DemoController {

  @GetMapping
  public ResponseEntity<String> sayHello() {
    return ResponseEntity.ok("Hello from secured endpoint");
  }

  @GetMapping("/{role}")
  public ResponseEntity<Role> sayHelloAll(@PathVariable(value = "role") Role role) {
    return ResponseEntity.ok(role);
  }
}
