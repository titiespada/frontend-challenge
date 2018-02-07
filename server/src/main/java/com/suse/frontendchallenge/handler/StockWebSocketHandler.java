package com.suse.frontendchallenge.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 * Manage the websockets.
 * @author patriciaespada
 *
 */
public class StockWebSocketHandler extends TextWebSocketHandler {

	private static final Logger LOGGER = LoggerFactory.getLogger(StockWebSocketHandler.class);
	private BroadcastHandler broadcastHandler;

	@Autowired
	public StockWebSocketHandler(BroadcastHandler broadcastHandler) {
		LOGGER.debug("Got handler: {}", broadcastHandler);
		this.broadcastHandler = broadcastHandler;
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception {
		LOGGER.debug("Adding session: {}", session.getId());
		broadcastHandler.add(session);
		super.afterConnectionEstablished(session);
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
		LOGGER.debug("Removing session: {}", session.getId());
		broadcastHandler.remove(session);
		super.afterConnectionClosed(session, status);
	}

	@Override
	protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		LOGGER.debug("GOT INIT MESSAGE: {}", message.getPayload());
	}
	
}
