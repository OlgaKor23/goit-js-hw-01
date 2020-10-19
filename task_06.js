let total = 0;

while (true) {
	let input = prompt('введите любое число');
	let value = Number(input);

	if(!value) break;
	total += value;

    console.log(`Общая сумма чисел равна ${value}`);
}



