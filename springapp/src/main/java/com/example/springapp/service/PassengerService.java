package com.example.springapp.service;


import com.example.springapp.model.Passenger;

import java.util.List;

public interface PassengerService {
     public Passenger savePassenger(Passenger passenger);

     public List<Passenger> fetchPassengerDetails();
}
