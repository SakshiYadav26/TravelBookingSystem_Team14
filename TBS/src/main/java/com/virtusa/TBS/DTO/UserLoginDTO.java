package com.virtusa.TBS.DTO;

public class UserLoginDTO {
  private String password;
  private String email;

  @Override
  public String toString() {
    return "UserLoginDTO [password=" + password + ", email=" + email + "]";
  }

  public UserLoginDTO() {
  }

  public UserLoginDTO(String password, String email) {
    this.password = password;
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}
