package com.suse.frontendchallenge.service;

import java.io.IOException;

/**
 * Service for dealing with computer systems operations.
 * @author patriciaespada
 *
 */
public interface ComputerSystemsService {

	String getAll() throws IOException;
	String findById(String id) throws IOException;
	
}
