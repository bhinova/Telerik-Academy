function checkRoots() {
	var firstValue = jsConsole.readInteger('#first-value');
	var secondValue = jsConsole.readInteger('#second-value');
	var thirdValue = jsConsole.readInteger('#third-value');
	if (firstValue === 0) {
		var x = -thirdValue / secondValue;
		jsConsole.writeLine('One root: ' + x);
	} else {
		var discriminant = (secondValue * secondValue) - (4 * firstValue * thirdValue);
		if (discriminant < 0) {
			jsConsole.writeLine('No roots.');
		}
		if (discriminant === 0) {
			var xx = (-1 * secondValue) / (2 * firstValue);
			jsConsole.writeLine('Double roots.' + xx);
		}
		if (discriminant > 0) {
			var x1 = ((-1 * secondValue) + Math.sqrt(discriminant)) / (2 * firstValue);
			var x2 = ((-1 * secondValue) - Math.sqrt(discriminant)) / (2 * firstValue);
			jsConsole.writeLine("First root: " + x1);
			jsConsole.writeLine("Second root: " + x2);
		}
	}
}