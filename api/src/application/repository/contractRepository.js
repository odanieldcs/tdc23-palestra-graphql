const database = require('../../../data/database.json');

function getAllContracts() {
	return database.contracts;
}

function getContractByUser(userId) {
	const contracts = database.contracts.filter(
		(contract) => contract.userId === Number(userId)
	);

	return contracts.length > 0 ? contracts : null;
}

function getContractById(contractId) {
	const contract = database.contracts.filter(
		(contract) => contract.id === contractId
	);

	return contract.length > 0 ? contract[0] : null;
}

module.exports = {
	getAllContracts,
	getContractByUser,
	getContractById,
};
