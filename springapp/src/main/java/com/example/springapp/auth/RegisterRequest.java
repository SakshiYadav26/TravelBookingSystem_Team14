package com.example.springapp.auth;

import com.example.springapp.model.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
  private String username;
  private String password;
  private String email;
  private String firstName;
  private String lastName;
  private String address;
  private String phone;
  private Role role;
}
