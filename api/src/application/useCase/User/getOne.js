const userRepository = require('../../repository/userRepository');
const contractRepository = require('../../repository/contractRepository');
const invoiceRepository = require('../../repository/invoiceRepository');

function execute(userId) {
	const user = userRepository.getOneUser(userId);

	return user;
}

module.exports = {
	execute,
};
