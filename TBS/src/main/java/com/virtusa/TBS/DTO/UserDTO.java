package com.virtusa.TBS.DTO;

import com.virtusa.TBS.model.Role;

public class UserDTO {
  private int id;
  private String username;
  private String password;
  private String email;
  private String firstName;
  private String lastName;
  private Role role;
  private String address;

 
  @Override
  public String toString() {
    return "UserDTO [id=" + id + ", username=" + username + ", email=" + email + ", firstName=" + firstName
        + ", lastName=" + lastName + ", role=" + role + ", address=" + address + "]";
  }

  public UserDTO(int id, String username, String password, String email, String firstName, String lastName, Role role,
      String address) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.address = address;
  }

  public UserDTO() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
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

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

}
