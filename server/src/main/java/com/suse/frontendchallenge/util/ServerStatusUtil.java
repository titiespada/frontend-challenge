package com.suse.frontendchallenge.util;

import java.util.Random;

/**
 * Util class to with utility methods for the server status.
 * @author patriciaespada
 *
 */
public class ServerStatusUtil {
	
	private ServerStatusUtil() { }
	
	private static final String[] STATES = {"pending", "running", "stopped"};

	public static String generateRandomState() {
		int idx = new Random().nextInt(STATES.length);
		return STATES[idx];
	}
	
}
