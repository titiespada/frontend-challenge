package com.suse.frontendchallenge.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.suse.frontendchallenge.service.ComputerSystemsService;

/**
 * Controller responsible to deal with requests to the computer system api.
 * @author patriciaespada
 *
 */
@RestController
@RequestMapping(path = "/api/", produces = MediaType.APPLICATION_JSON_VALUE)
public class ComputerSystemsController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComputerSystemsController.class);

	@Autowired
	private ComputerSystemsService computerSystemsService;

	@GetMapping
	@CrossOrigin(origins = {"http://localhost:3000", "https://computer-systems-ui.herokuapp.com"})
	public ResponseEntity<String> getComputerSystems() throws IOException {
		LOGGER.debug("Get all computer system info");
		
		return new ResponseEntity<>(computerSystemsService.getAll(), HttpStatus.OK);
	}

	@GetMapping(value="{id}")
	@CrossOrigin(origins = {"http://localhost:3000", "https://computer-systems-ui.herokuapp.com"})
	public ResponseEntity<String> getComputerSystemDetails(@PathVariable(value = "id", required = true) String id) throws IOException {
		LOGGER.debug("Get details for the computer system with id {}", id);
		
		return new ResponseEntity<>(computerSystemsService.findById(id), HttpStatus.OK);
	}

}
