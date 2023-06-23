package com.virtusa.TBS.service;

import com.virtusa.TBS.DTO.UserDTO;
import com.virtusa.TBS.DTO.UserLoginDTO;
import com.virtusa.TBS.response.LoginResponse;
import com.virtusa.TBS.model.User;

public interface UserService {
  public String addUser(UserDTO userDto);

  public LoginResponse userLogin(UserLoginDTO loginDto);
  
  public User getUserData(String email);
}
