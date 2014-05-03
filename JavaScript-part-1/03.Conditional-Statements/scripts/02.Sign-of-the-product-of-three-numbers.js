function checkTheSign() {
	var firstValue = jsConsole.readInteger('#first-value');
	var secondValue = jsConsole.readInteger('#second-value');
	var thirdValue = jsConsole.readInteger('#third-value');
	var count = 0;

	
	if (Number(firstValue) === 0 || Number(secondValue) === 0 || Number(thirdValue) === 0) {
		jsConsole.writeLine('0');
		return;
	}
	if (Number(firstValue) < 0) {
		count++;
	}
	if (Number(secondValue) < 0) {
		count++;
	}
	if (Number(thirdValue) < 0) {
		count++;
	}
	if (count % 2 === 0) {
		jsConsole.writeLine('+');
	} else {
		jsConsole.writeLine('-');
	}
}