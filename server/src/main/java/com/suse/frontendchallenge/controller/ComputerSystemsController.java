package com.suse.frontendchallenge.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.Random;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

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
	private ResourceLoader resourceLoader;
	
	private static final String[] STATES = {"pending", "running", "stopped"};

	@GetMapping
	@CrossOrigin(origins = {"http://localhost:3000", "https://computer-systems-ui.herokuapp.com"})
	public ResponseEntity<String> getComputerSystems() throws IOException {
		String detailsStr = "{}";
		ObjectMapper objectMapper = new ObjectMapper();
		try (InputStream is = resourceLoader.getResource("classpath:json/systems-long-list.json").getInputStream()) {
			JsonNode allDetails = objectMapper.readTree(is);
			for (JsonNode node: allDetails.get(0).get("systems")) {
				((ObjectNode) node).put("provision_state_id", generateRandomState());
			}
			detailsStr = objectMapper.writeValueAsString(allDetails);
		}
		return new ResponseEntity<>(detailsStr, HttpStatus.OK);
	}
	
	private String generateRandomState() {
		int idx = new Random().nextInt(STATES.length);
		return STATES[idx];
	}

	@GetMapping(value="{id}")
	@CrossOrigin(origins = {"http://localhost:3000", "https://computer-systems-ui.herokuapp.com"})
	public ResponseEntity<String> getComputerSystemDetails(@PathVariable(value = "id", required = true) String id) throws IOException {
		LOGGER.debug("Get details for the computer system with id {}", id);
		String detailsStr = "{}";
		ObjectMapper objectMapper = new ObjectMapper();
		try (InputStream is = resourceLoader.getResource("classpath:json/system-details.json").getInputStream()) {
			JsonNode allDetails = objectMapper.readTree(is);
			if (allDetails.has("return")) {
				JsonNode returnNode = allDetails.get("return");
				if (returnNode.has(0)) {
					JsonNode firstNode = returnNode.get(0);
					if (firstNode.has(id)) {
						JsonNode computerSystemDetails = firstNode.get(id);
						detailsStr = objectMapper.writeValueAsString(computerSystemDetails);
					}
				}
			}
		}
		return new ResponseEntity<>(detailsStr, HttpStatus.OK);
	}

}
