package com.example.springapp.controller;

import com.example.springapp.exception.HotelNotFoundException;
import com.example.springapp.model.Hotel;
import com.example.springapp.model.HotelBooking;
import com.example.springapp.repository.HotelBookingRepository;
import com.example.springapp.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class HotelController {

  @Autowired
  private HotelRepository hotelRepository;
  @Autowired
  private HotelBookingRepository hotelBookingRepository;

  @PostMapping("/hotel")
  Hotel newHotel(@RequestBody Hotel newHotel) {
    return hotelRepository.save(newHotel);
  }

  @GetMapping("/hotels")
  List<Hotel> getAllHotels() {
    return hotelRepository.findAll();
  }

  @GetMapping("/hotels/{hotelId}")
  Optional<Hotel> getHotelById(@PathVariable Long hotelId) {
    return hotelRepository.findById(hotelId);
  }

  @PutMapping("/hotels/{hotelId}")
  Hotel updateHotel(@RequestBody Hotel hotelRequest, @PathVariable Long hotelId) {
    return hotelRepository.findById(hotelId)
        .map(hotel -> {
          hotel.setHotelName(hotelRequest.getHotelName());
          hotel.setLocation(hotelRequest.getLocation());
          hotel.setPrice(hotelRequest.getPrice());
          return hotelRepository.save(hotel);
        }).orElseThrow(() -> new HotelNotFoundException(hotelId));
  }

  @DeleteMapping("/hotels/{hotelId}")
  String deleteHotel(@PathVariable Long hotelId) {
    if (!hotelRepository.existsById(hotelId)) {
      throw new HotelNotFoundException(hotelId);
    }

    hotelRepository.deleteById(hotelId);
    return "Hotel with id " + hotelId + " has been deleted successfully!";
  }

  // SRS API Endpoints
  @GetMapping("/hotels/search")
  public List<Hotel> searchHotels(@RequestParam(value = "location", required = false) String location,
      @RequestParam(value = "checkInDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkInDate,
      @RequestParam(value = "checkOutDate", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate checkOutDate) {

    // Check if any search criteria is provided
    if (location == null && checkInDate == null && checkOutDate == null) {
      // No search criteria provided, return all hotels
      return hotelRepository.findAll();
    }

    // Perform search logic based on the specified criteria
    List<Hotel> hotels = hotelRepository.searchHotels(location, checkInDate, checkOutDate);
    return hotels;
  }

  @PostMapping("/hotel/book")
  public HotelBooking bookHotel(@RequestBody HotelBooking hotelBooking) {
    return hotelBookingRepository.save(hotelBooking);
  }

  @GetMapping("/hotels/manage")
  public List<HotelBooking> manageBookings() { // @RequestParam("user-id") Long customerId) {
    // Retrieve and return the list of hotel bookings associated with the specified
    // user ID
    // List<HotelBookingRequest> bookings =
    // hotelBookingRepository.findByCustomerId(customerId);
    return hotelBookingRepository.findAll();
  }

  // @PutMapping("/hotels/manage/{bookingId}")
  // public HotelBooking updateBookingStatus(@PathVariable("bookingId") Long
  // bookingId,
  // @RequestParam("status") String status) {
  // // Call the service method to update the booking status
  // return hotelBookingRepository.updateBookingStatus(bookingId, status);
  // }

}
