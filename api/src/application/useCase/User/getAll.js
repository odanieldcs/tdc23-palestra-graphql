const userRepository = require('../../repository/userRepository');

function execute() {
	return userRepository.getAllUsers();
}

module.exports = {
	execute,
};
