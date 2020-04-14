const express = require('express');
const router = express.Router();
const GPIO = require('pigpio').Gpio;

const motor = new GPIO(27, {mode: GPIO.OUTPUT});

// pass servo pulse
router.get('/:pulse', function(req, res, next) {
	try {
	  if (req.params.pulse) {
		motor.servoWrite(parseInt(req.params.pulse));
	  }
	  res.json(req.params.pulse | 'test');
	} catch (err) {
	  req.json(err);
	}
});

module.exports = router;