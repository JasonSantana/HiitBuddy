window.onload = function () {
	let seconds = document.getElementById("seconds");
	let breathSec = document.getElementById("breathSec");
	let millisec = document.getElementById("milli");
	let startButton = document.getElementById("start");
	let stopButton = document.getElementById("stop");
	let resetButton = document.getElementById("reset");
	let changeSeconds = 00;
	let changeMilliSec = 00;
	let changeBreath = 00;
	let changeRound = 00;
	let changeBreathMilli = 00;
	let spins = document.getElementById("spins");
	let breathMilli = document.getElementById("breathMilli");
	let interval;
	let initialDuration;
	let initialRest;
	let collector = document.getElementById("hide");
	let counter = document.getElementById("show");

	// START, STOP AND RESET BUTTONS

	startButton.onclick = function start() {
		clearInterval(interval);
		interval = setInterval(startTimer, 10);

		initialDuration = document.getElementById("roundLength").value;
		initialRest = document.getElementById("restlength").value;
		changeSeconds = initialDuration;
		changeRound = document.getElementById("rounds").value;
		spins.innerHTML = changeRound;
	};

	stopButton.onclick = function () {
		clearInterval(interval);
		isTimerRunning = false;
	};

	resetButton.onclick = function () {
		clearInterval(interval);
		seconds.innerHTML = "00";
		millisec.innerHTML = "00";
		breathSec.innerHTML = "00";
		breathMilli.innerHTML = "00";
		spins.innerHTML = "00";
		changeSeconds = 00;
		changeMilliSec = 00;
		changeBreathMilli = 00;
		changeRound = 00;
		document.getElementById("rounds").value = 0;
		document.getElementById("roundLength").value = 0;
		document.getElementById("restlength").value = 0;
		counter.classList.add("flex-col");
		collector.classList.remove("hidden");
	};

	// SET TIMER FIELDS

	let submitButton = document.getElementById("submit");

	submitButton.onclick = function () {
		let setRound = document.getElementById("rounds").value;
		let setDuration = document.getElementById("roundLength").value;
		let setRest = document.getElementById("restlength").value;
		spins.innerHTML = setRound;
		breathSec.innerHTML = setRest;
		seconds.innerHTML = setDuration;
		breathSec.innerHTML = setRest;
		console.log("semilla");
		counter.classList.remove("hidden");
		collector.classList.add("hidden");
	};

	// START TIMER, GOVERN TIME DECREMENT

	function startTimer() {
		changeMilliSec--;
		millisec.innerHTML = changeMilliSec;
		seconds.innerHTML = changeSeconds;
		// let breathDuration = document.getElementById('restlength').value;

		if (changeMilliSec < 00) {
			changeSeconds--;
			seconds.innerHTML = changeSeconds;
			changeMilliSec = 99;
			document.getElementById("roundLength").value = changeSeconds;
		}

		if (changeSeconds < 10) {
			seconds.innerHTML = "0" + changeSeconds;
		}

		if (changeMilliSec < 10) {
			millisec.innerHTML = "0" + changeMilliSec;
		}

		if (changeSeconds < 0) {
			changeRound--;
			clearInterval(interval);
			seconds.innerHTML = "00";
			millisec.innerHTML = "00";
			changeSeconds = 00;
			changeMilliSec = 00;
			document.getElementById("roundLength").value = "";
			spins.innerHTML = changeRound;

			if (changeRound > 0) {
				console.log(changeRound);
				breathDuration = initialRest;
				interval = setInterval(startRestTimer, 10);
			} else {
				resetTimers();
			}
		}
		function resetTimers() {
			changeSeconds = initialDuration;
			changeBreath = initialRest;
			changeMilliSec = 00;
			changeBreath = initialRest;
			console.log("initialRestSet");
			changeBreathMilli = 00;
			seconds.innerHTML = changeSeconds;
			breathSec.innerHTML = changeBreath;
			document.getElementById("restlength").value = initialRest;
		}
	}

	// START REST TIMER

	function startRestTimer() {
		let breathDuration = document.getElementById("restlength").value;
		changeBreath = breathDuration;
		changeBreathMilli--;
		breathMilli.innerHTML = changeBreathMilli;
		breathSec.innerHTML = changeBreath;

		if (changeBreathMilli < 00) {
			changeBreath--;
			changeBreathMilli = 99;
			document.getElementById("restlength").value = changeBreath;
			breathSec.value = changeBreath;
		}

		if (changeBreath < 10) {
			breathSec.innerHTML = "0" + changeBreath;
		}

		if (changeBreathMilli < 10) {
			breathMilli.innerHTML = "0" + changeBreathMilli;
		}

		if (changeBreath < 0) {
			breathSec.innerHTML = "00";
			breathMilli.innerHTML = "00";
			changeBreath = breathDuration;
			changeBreathMilli = 00;
			document.getElementById("roundLength").value = "";
			document.getElementById("restlength").value = "";
			resetTimers();
			clearInterval(interval);
			interval = setInterval(startTimer, 10);
		}

		function resetTimers() {
			changeSeconds = initialDuration;
			changeBreath = initialRest;
			changeMilliSec = 00;
			changeBreath = initialRest;
			console.log("initialRestSet");
			changeBreathMilli = 00;
			seconds.innerHTML = changeSeconds;
			breathSec.innerHTML = changeBreath;
			document.getElementById("restlength").value = initialRest;
		}
	}
};
