function greatestNumber() {
	var firstValue = jsConsole.readInteger('#first-value');
	var secondValue = jsConsole.readInteger('#second-value');
	var thirdValue = jsConsole.readInteger('#third-value');
	var fourthValue = jsConsole.readInteger('#fourth-value');
	var fifthValue = jsConsole.readInteger('#fifth-value');

	if (firstValue >= secondValue && firstValue >= thirdValue &&
	 firstValue >= fourthValue && firstValue >= fifthValue) {
		jsConsole.writeLine(firstValue);
	}
	else if (firstValue <= secondValue && secondValue >= thirdValue &&
	 secondValue >= fourthValue && secondValue >= fifthValue) {
		jsConsole.writeLine(secondValue);
	}
	else if (thirdValue >= secondValue && firstValue <= thirdValue &&
	 thirdValue >= fourthValue && thirdValue >= fifthValue) {
		jsConsole.writeLine(thirdValue);
	}
	else if (fourthValue >= secondValue && fourthValue >= thirdValue &&
	 firstValue <= fourthValue && fourthValue >= fifthValue) {
		jsConsole.writeLine(fourthValue);
	}
	else {
		jsConsole.writeLine(fifthValue);
	}
}