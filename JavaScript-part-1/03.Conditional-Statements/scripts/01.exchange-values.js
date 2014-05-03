function swapValues() {
	var firstValue = jsConsole.readFloat('#first-value');
	var secondValue = jsConsole.readFloat('#second-value');

	var temp = 0;
	if (firstValue > secondValue) {
		temp = firstValue;
		firstValue = secondValue; 
		secondValue = temp;
		jsConsole.writeLine('firstValue: ' + firstValue + ' ||' + ' secondValue: ' + secondValue);
	} else {
		jsConsole.writeLine('firstValue: ' + firstValue + ' ||' +  ' secondValue: ' + secondValue);
	}
}