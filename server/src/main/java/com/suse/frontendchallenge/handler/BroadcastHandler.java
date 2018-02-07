package com.suse.frontendchallenge.handler;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

/**
 * Responsible to transmit the message to all active websockets.
 * @author patriciaespada
 *
 */
public class BroadcastHandler {

	private static final Logger LOGGER = LoggerFactory.getLogger(BroadcastHandler.class);

	private static final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

	private final Object monitor = new Object();

	public void add(WebSocketSession session) {
		synchronized (monitor) {
			if (!sessions.contains(session)) sessions.add(session);
		}
	}

	public void broadcast(String message) {
		LOGGER.debug("Start Broadcasting");
		for (WebSocketSession session : sessions) {
			try {
				if (session.isOpen()) {
					session.sendMessage(new TextMessage(message));
				}
			} catch (IOException e) {
				LOGGER.error("Error in sending message for session {}", session.getId(), e);
			}
		}
		LOGGER.debug("Finished Broadcasting");
		LOGGER.info("Total active sessions {}", sessions.size());
	}

	public void remove(WebSocketSession session) {
		synchronized (monitor) {
			LOGGER.debug("REMOVING channel: {}", session);
			sessions.remove(session);
		}
	}
	
}
