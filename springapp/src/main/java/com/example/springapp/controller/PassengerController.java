package com.example.springapp.controller;

import com.example.springapp.model.Passenger;
import com.example.springapp.service.PassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PassengerController {

  @Autowired
  private PassengerService passengerService;

  @PostMapping("/passengerDetails")
  public Passenger savePassenger(@RequestBody Passenger passenger) {
    return passengerService.savePassenger(passenger);
  }

  @GetMapping("/getAllPassenger")
  public List<Passenger> fetchPassengerDetails() {
    return passengerService.fetchPassengerDetails();
  }
}
