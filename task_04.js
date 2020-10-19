let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;

let value = prompt('Сколько нужно дроидов?');
value = Number(value);
totalPrice = pricePerDroid * credits;

if(value === null) {
   value = console.log('Отменено пользователем!');
} else {
    value = Number(value);
    totalPrice = pricePerDroid * value;
    console.log(totalPrice);

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        credits -= totalPrice;
        console.log(`Вы купили ${value} дроидов, на счету осталось ${credits} кредитов.`);
    }
}

