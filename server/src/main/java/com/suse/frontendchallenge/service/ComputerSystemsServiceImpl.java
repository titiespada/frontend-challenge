package com.suse.frontendchallenge.service;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.suse.frontendchallenge.util.ServerStatusUtil;

/**
 * Implementation of the service for dealing with computer systems operations.
 * @author patriciaespada
 *
 */
@Service("computerSystemsService")
public class ComputerSystemsServiceImpl implements ComputerSystemsService {
	
	@Autowired
	private ResourceLoader resourceLoader;
	
	@Override
	public String getAll() throws IOException {
		String detailsStr = "{}";
		ObjectMapper objectMapper = new ObjectMapper();
		try (InputStream is = resourceLoader.getResource("classpath:json/systems-long-list.json").getInputStream()) {
			JsonNode allDetails = objectMapper.readTree(is);
			for (JsonNode node: allDetails.get(0).get("systems")) {
				((ObjectNode) node).put("provision_state_id", ServerStatusUtil.generateRandomState());
			}
			detailsStr = objectMapper.writeValueAsString(allDetails);
		}
		return detailsStr;
	}

	@Override
	public String findById(String id) throws IOException {
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
		return detailsStr;
	}

}
