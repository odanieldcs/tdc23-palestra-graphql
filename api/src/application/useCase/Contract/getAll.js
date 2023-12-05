const contractRepository = require('../../repository/contractRepository');

function execute() {
	return contractRepository.getAllContracts();
}

module.exports = execute;
