package com.excel.vehicleservice.exception;

public class ServiceNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ServiceNotFoundException(String message) {
		super(message);

	}

}
