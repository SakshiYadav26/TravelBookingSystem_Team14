package com.virtusa.TBS.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.virtusa.TBS.model.User;
import com.virtusa.TBS.DTO.UserDTO;
import com.virtusa.TBS.DTO.UserLoginDTO;
import com.virtusa.TBS.response.LoginResponse;
import com.virtusa.TBS.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
public class UserController {
  @Autowired
  private UserService userService;

  @PostMapping("/users")
  public String saveData(@RequestBody UserDTO userDTO) {
    return userService.addUser(userDTO);
  }

  @PostMapping("/login")
  public ResponseEntity<?> loginUser(@RequestBody UserLoginDTO loginDTO) {
    LoginResponse loginResponse = userService.userLogin(loginDTO);
    return ResponseEntity.ok(loginResponse);
  }

   @GetMapping("/user")
  public ResponseEntity<User> getUserData(@RequestParam String email) {
    User userData = userService.getUserData(email);
    if (userData != null) {
      return ResponseEntity.ok(userData);
    } else {
      return ResponseEntity.notFound().build();
    }
  }
}
