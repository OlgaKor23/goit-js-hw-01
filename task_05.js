let country = prompt('Введите страну доставки товара');
let price;

if(country === null) {
	console.log('попробуйте еще раз');
} else {
	switch (country.toLowerCase()) {
		case 'китай':
			country = 'Китай';
			price = 100;
			break;

		case 'чили':
			country = 'Чили';
			price = 250;
			break;

		case 'австралия':
			country = 'Австралию';
			price = 170;
			break;

		case 'индия':
			country = 'Индию';
			price = 80;
			break;

		case 'ямайка':
			country = 'Ямайку';
			price = 120;
			break; 

		default: 
			console.log('В вашей стране доставка не доступна');
			price = null;
	}

	if(price !== null) {
		console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
	}
}
