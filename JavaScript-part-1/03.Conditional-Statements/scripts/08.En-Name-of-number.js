function englishName() {
	var number = jsConsole.readInteger('#value');
	var name = '';
	var secondNumber = '' + number;
	if (number === 0) {
		name = 'Zero';
	}
	if (number < 20) {
		name += numbersToNineteen(number);
	}

	if (number >= 100 && number <= 999) {
		secondNumber = secondNumber[secondNumber.length - 2];
		var hundreds = number / 100;
		//number = number / 100; 
		hundreds = Math.floor(hundreds);
		switch (hundreds) {
			case 1:
				name += 'One Hundred';
				break;
			case 2:
				name += 'Two Hundred';
				break;
			case 3:
				name += 'Tree Hundred';
				break;
			case 4:
				name += 'Four Hundred';
				break;
			case 5:
				name += 'Five Hundred';
				break;
			case 6:
				name += 'Six Hundred';
				break;
			case 7:
				name += 'Seven Hundred';
				break;
			case 8:
				name += 'Eight Hundred';
				break;
			case 9:
				name += 'Nine Hundred';
				break;
		}

		if (number % 100 >= 20) {
			name += ' And ';
			switch (Number(secondNumber)) {
				case 2:
					name = name + 'Twenty';
					break;
				case 3:
					name += 'Thirty';
					break;
				case 4:
					name += 'Fourty';
					break;
				case 5:
					name += 'Fifty';
					break;
				case 6:
					name += 'Sixty';
					break;
				case 7:
					name += 'Seventy';
					break;
				case 8:
					name += 'Eighty';
					break;
				case 9:
					name += 'Niny';
					break;
			}
			if (number % 10 !== 0) {
				name += ' ';
				name += digits(number % 10);
			}
		}
		if (number % 100 <= 19) {
			name += ' And ';
			var num = number % 100;
			name += numbersToNineteen(num);
		}
	}

	jsConsole.writeLine(name);
}

function numbersToNineteen(number) {
	switch (number) {
		case 1:
			name += 'One';
			break;
		case 2:
			name += 'Two';
			break;
		case 3:
			name += 'Tree';
			break;
		case 4:
			name += 'Four';
			break;
		case 5:
			name += 'Five';
			break;
		case 6:
			name += 'Six';
			break;
		case 7:
			name += 'Seven';
			break;
		case 8:
			name += 'Eight';
			break;
		case 9:
			name += 'Nine';
			break;
		case 10:
			name = 'Ten';
			break;
		case 11:
			name = 'Eleven';
			break;
		case 12:
			name = 'Twelve';
			break;
		case 13:
			name = 'Thirdteen';
			break;
		case 14:
			name = 'Fourteen';
			break;
		case 15:
			name = 'Fifteen';
			break;
		case 16:
			name = 'Sixteen';
			break;
		case 17:
			name = 'Seventeen';
			break;
		case 18:
			name = 'Eightteen';
			break;
		case 19:
			name = 'Nineteen';
			break;
	}
	return name;
}

function digits(number) {
	switch (number) {
		case 1:
			name += 'One';
			break;
		case 2:
			name += 'Two';
			break;
		case 3:
			name += 'Tree';
			break;
		case 4:
			name += 'Four';
			break;
		case 5:
			name += 'Five';
			break;
		case 6:
			name += 'Six';
			break;
		case 7:
			name += 'Seven';
			break;
		case 8:
			name += 'Eight';
			break;
		case 9:
			name += 'Nine';
			break;
	}
	return name;
}
