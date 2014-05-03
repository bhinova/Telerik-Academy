function decendingOrder() {
	var firstValue = jsConsole.readInteger('#first-value');
	var secondValue = jsConsole.readInteger('#second-value');
	var thirdValue = jsConsole.readInteger('#third-value');

	if (firstValue >= secondValue && firstValue >= thirdValue) {
		if (secondValue >= thirdValue) {
			jsConsole.writeLine(firstValue + ' ' + secondValue + ' ' + thirdValue);
		}
		else {
			jsConsole.writeLine(firstValue + ' ' + thirdValue + ' ' + secondValue);
		}
	}
	else if (secondValue >= firstValue && secondValue >= thirdValue) {
		if (firstValue >= thirdValue) {
			jsConsole.writeLine(secondValue + ' '+ firstValue + ' ' + thirdValue);
		}
		else {
			jsConsole.writeLine(secondValue + ' ' + thirdValue + ' ' + firstValue);
		}
	}
	else{
		if (secondValue >= firstValue) {
			jsConsole.writeLine(thirdValue + ' ' + secondValue + ' ' + firstValue);
		}
		else {
			jsConsole.writeLine(thirdValue + ' ' + firstValue + ' ' + secondValue);
		}
	}
}