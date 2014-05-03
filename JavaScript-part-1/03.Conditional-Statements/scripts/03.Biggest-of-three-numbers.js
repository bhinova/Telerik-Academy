function biggestNumber() {
	var firstValue = jsConsole.readInteger('#first-value');
	var secondValue = jsConsole.readInteger('#second-value');
	var thirdValue = jsConsole.readInteger('#third-value');
	
	if (firstValue >= secondValue && firstValue >= thirdValue) {
		jsConsole.writeLine(firstValue);
	}
	else if (secondValue >= firstValue && secondValue >= thirdValue) {
		jsConsole.writeLine(secondValue);
	}
	else if (thirdValue >= firstValue && thirdValue >= secondValue) {
		jsConsole.writeLine(thirdValue);	
	}
}