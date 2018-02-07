export function chartColors(idx) {
	return ['#f0c756','#5fb18b','#ff4955'][idx];
}

export function getProvisionStateInfo(computerSystems) {
	var pending = 0;
	var running = 0;
	var stopped = 0;
	computerSystems.forEach( computerSystem => {
		if (computerSystem.provision_state_id === 'pending') {
			pending++;
		} else if (computerSystem.provision_state_id === 'running') {
			running++;
		} else if (computerSystem.provision_state_id === 'stopped') {
			stopped++;
		}
	});

	var count = pending + running + stopped;
	var pendingPercent = pending === 0 ? 0.0 : parseFloat(((pending/count)*100).toFixed(2));
	var runningPercent = running === 0 ? 0.0 : parseFloat(((running/count)*100).toFixed(2));
	var stoppedPercent = stopped === 0 ? 0.0 : parseFloat(((stopped/count)*100).toFixed(2));
	return [{label: "pending", value: pendingPercent}, {label: "running", value: runningPercent}, {label: "stopped", value: stoppedPercent}];
}