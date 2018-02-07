package com.suse.frontendchallenge.task;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.suse.frontendchallenge.handler.BroadcastHandler;
import com.suse.frontendchallenge.service.ComputerSystemsService;

/**
 * Task for getting the server status updated.
 * @author patriciaespada
 *
 */
@Component
public class ServerStatusScheduledTask {

	private static final Logger LOGGER = LoggerFactory.getLogger(ServerStatusScheduledTask.class);

	@Autowired
	private BroadcastHandler broadcastHandler;

	@Autowired
	private ComputerSystemsService computerSystemsService;

	@Scheduled(fixedRate = 5000)
	public void getServerStatus() throws IOException {
		LOGGER.debug("Broadcasting now");
		try {
			broadcastHandler.broadcast(computerSystemsService.getAll());
		} catch (JsonProcessingException e) {
			LOGGER.error("Erorr in getting prices", e);
		}
	}

}
