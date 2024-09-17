package com.excel.vehicleservice.service;

import java.util.List;
import com.excel.vehicleservice.dto.BookinDto;
import com.excel.vehicleservice.dto.BookingListDto;
import com.excel.vehicleservice.dto.CustomerRegistrationDto;
import com.excel.vehicleservice.dto.ServiceDetailsDto;
import com.excel.vehicleservice.dto.ServiceDetailsListDto;
import com.excel.vehicleservice.dto.VehicleListDto;
import com.excel.vehicleservice.dto.VehicleRegistrationDto;

public interface VehicleService {

	String addServiceDetails(ServiceDetailsListDto dto);

	List<ServiceDetailsDto> getService();

	String deleteService(ServiceDetailsDto dto);

	String updateService(ServiceDetailsDto serviceDetailsDto);

	Integer saveCustomer(CustomerRegistrationDto customerRegistrationDto);

	String saveBooking(BookingListDto bookinDto);

	List<BookinDto> getBooking();

	String saveVehicleDetails(VehicleListDto dto);

	List<VehicleRegistrationDto> getVehicle();

	CustomerRegistrationDto login(CustomerRegistrationDto dto);

	ServiceDetailsDto getByServiceId(Integer id);

	BookinDto getByBooingId(Integer id);

	VehicleRegistrationDto getByVehicleRegId(Integer id);

	List<CustomerRegistrationDto> getCustomer();

	List<ServiceDetailsDto> getServicebyCustomerId(Integer customerRegId);

	List<VehicleRegistrationDto> getVehiclebyCustomerId(Integer customerRegId);

	List<BookinDto> getBookingByCustomerRegId(Integer customerRegId);

	void sendSimpleMessage(String to, String subject, String text);


}
