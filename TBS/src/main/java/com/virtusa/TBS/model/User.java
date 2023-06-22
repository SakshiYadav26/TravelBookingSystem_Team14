package com.virtusa.TBS.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
  @Id
  @Column(name = "id", length = 45)
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  @Column(name = "username", length = 255)
  private String username;
  @Column(name = "password", length = 255)
  private String password;
  @Column(name = "email", length = 255, unique = true)
  private String email;
  @Column(name = "firstName", length = 255)
  private String firstName;
  @Column(name = "lastName", length = 255)
  private String lastName;

  @Enumerated(EnumType.STRING)
  private Role role;

  @Column(name = "address", length = 255)
  private String address;

  

  @Override
  public String toString() {
    return "User [id=" + id + ", username=" + username + ", email=" + email + ", firstName=" + firstName + ", lastName="
        + lastName + ", role=" + role + ", address=" + address + "]";
  }

  public User(int id, String username, String password, String email, String firstName, String lastName, Role role,
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

  public User() {
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
