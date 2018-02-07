package com.suse.frontendchallenge;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.handler.PerConnectionWebSocketHandler;

import com.suse.frontendchallenge.handler.BroadcastHandler;
import com.suse.frontendchallenge.handler.StockWebSocketHandler;

@SpringBootApplication
@EnableAutoConfiguration
@EnableWebSocket
@EnableScheduling
public class ComputerSystemsServerApplication extends SpringBootServletInitializer implements WebSocketConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(ComputerSystemsServerApplication.class, args);
	}

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(stockWebSocketHandler(), "/serverStatus").setAllowedOrigins("*").withSockJS();
	}

	@Bean
	public WebSocketHandler stockWebSocketHandler() {
		return new PerConnectionWebSocketHandler(StockWebSocketHandler.class);
	}

	@Bean
	public BroadcastHandler createBroadcastHandler() {
		return new BroadcastHandler();
	}

}
