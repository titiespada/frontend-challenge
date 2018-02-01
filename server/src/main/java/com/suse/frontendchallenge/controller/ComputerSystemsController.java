package com.suse.frontendchallenge.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;

import org.apache.commons.io.IOUtils;
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

/**
 * Controller responsible to deal with requests to the computer system api.
 * @author patriciaespada
 *
 */
@RestController
@RequestMapping(path = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class ComputerSystemsController {

	private static final Logger LOGGER = LoggerFactory.getLogger(ComputerSystemsController.class);

	@Autowired
	private ResourceLoader resourceLoader;

	@GetMapping
	@CrossOrigin(origins = {"http://localhost:3000"})
	public ResponseEntity<String> getComputerSystems() throws IOException {
		LOGGER.debug("Get all computer systems");
		InputStream in = resourceLoader.getResource("classpath:json/systems-long-list.json").getInputStream();
		StringWriter writer = new StringWriter();
		IOUtils.copy(in, writer, StandardCharsets.UTF_8);
		return new ResponseEntity<>(writer.toString(), HttpStatus.OK);
	}

	@GetMapping(value="/{id}")
	@CrossOrigin(origins = {"http://localhost:3000"})
	public ResponseEntity<String> getComputerSystemDetails(@PathVariable(value = "id", required = true) String id) throws IOException {
		LOGGER.debug("Get details for the computer system with id {}", id);
		String detailsStr = "";
		ObjectMapper objectMapper = new ObjectMapper();
		try (FileInputStream fis = new FileInputStream(resourceLoader.getResource("classpath:json/system-details.json").getFile())) {
			JsonNode allDetails = objectMapper.readTree(fis);
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
