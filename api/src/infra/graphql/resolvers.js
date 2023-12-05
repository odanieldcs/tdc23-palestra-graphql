const userRepository = require('../../application/repository/userRepository');
const userGetOne = require('../../application/useCase/User/getOne');
const userGetAll = require('../../application/useCase/User/getAll');

module.exports = {
	hello() {
		return 'Hello World';
	},
	users() {
		return userGetAll.execute();
	},
	user(parent, args) {
		const userId = args.id;

		return userGetOne.execute(userId);
	},
	message(parent, args) {
		const { text } = args;
		console.log(text);

		return text;
	},
};
