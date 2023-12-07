const userRepository = require('../../application/repository/userRepository');
const userGetOne = require('../../application/useCase/User/getOne');
const userGetAll = require('../../application/useCase/User/getAll');
const invoiceGetAll = require('../../application/useCase/Invoice/getAll');

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

		return text;
	},
	contracts(parent, args) {
		const { limit } = args;
		const contracts = invoiceGetAll.execute(limit);

		return contracts;
	},
	invoices(parent, args) {
		const { limit } = args;
		const invoices = invoiceGetAll.execute(limit);

		return invoices;
	},
};
