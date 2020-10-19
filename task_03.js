const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let password = prompt('введите пароль!');

if(password === null) {
	message = console.log('Отменено пользователем!');
} else if (password === ADMIN_PASSWORD) {
	message = console.log('Добро пожаловать!');
} else {
	message = console.log('неверный пароль!');
}

alert(message);
