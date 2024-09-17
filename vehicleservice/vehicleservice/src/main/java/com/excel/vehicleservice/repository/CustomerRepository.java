package com.excel.vehicleservice.repository;

import com.excel.vehicleservice.entity.CustomerRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<CustomerRegistration, Integer> {

	Optional<CustomerRegistration> findByCustomerRegId(Integer customerRegId);

	Optional<CustomerRegistration> findByCustomerEmail(String customerEmail);

}
