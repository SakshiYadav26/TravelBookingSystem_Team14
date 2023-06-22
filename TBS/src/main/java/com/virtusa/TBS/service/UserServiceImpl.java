package com.virtusa.TBS.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.virtusa.TBS.DTO.UserDTO;
import com.virtusa.TBS.DTO.UserLoginDTO;
import com.virtusa.TBS.model.User;
import com.virtusa.TBS.repository.UserRepository;
import com.virtusa.TBS.response.LoginResponse;

@Service
public class UserServiceImpl implements UserService {
  @Autowired
  private UserRepository userRepo;

  @Autowired
  private PasswordEncoder passwordEncoder;

  // Sign up users
  @Override
  public String addUser(UserDTO userDto) {
    User user = new User(
        userDto.getId(),
        userDto.getUsername(),
        this.passwordEncoder.encode(userDto.getPassword()),
        userDto.getEmail(),
        userDto.getFirstName(),
        userDto.getLastName(),
        userDto.getRole(),
        userDto.getAddress());

    userRepo.save(user);
    return user.getFirstName() + " " + user.getLastName();
  }

  // Login users
  @Override
  public LoginResponse userLogin(UserLoginDTO loginDto) {
    User user1 = userRepo.findByEmail(loginDto.getEmail());
    if (user1 != null) {
      String password = loginDto.getPassword();
      String encodedPasword = user1.getPassword();
      Boolean isPwdRight = passwordEncoder.matches(password, encodedPasword);
      if (isPwdRight) {
        Optional<User> user = userRepo.findOneByEmailAndPassword(loginDto.getEmail(), encodedPasword);
        if (user.isPresent())
          return new LoginResponse("Login Successful!", true, user1);
        else
          return new LoginResponse("Login Failed", false, null);
      } else {
        return new LoginResponse("password Not Match", false, null);
      }
    } else
      return new LoginResponse("Email does not exist", false, null);
  }

}
