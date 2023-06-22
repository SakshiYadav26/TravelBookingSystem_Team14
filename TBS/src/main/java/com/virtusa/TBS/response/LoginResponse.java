package com.virtusa.TBS.response;

import com.virtusa.TBS.model.User;

public class LoginResponse {
  private String message;
  private Boolean status;
  private User user;

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public LoginResponse(String message, Boolean status, User user) {
    this.user = user;
    this.message = message;
    this.status = status;
  }

  @Override
  public String toString() {
    return "LoginResponse [message=" + message + ", status=" + status + "]";
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public Boolean getStatus() {
    return status;
  }

  public void setStatus(Boolean status) {
    this.status = status;
  }

}
