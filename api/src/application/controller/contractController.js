const contractRepository = require('../repository/contractRepository');

function getAllContracts(req, res, next) {
	const contract = contractRepository.getAllContracts();

	res.status(200).json(contract);
}

function getContractsByUserId(req, res, next) {
	const userId = req.params.userId;
	const contracts = contractRepository.getContractByUser(userId);

	if (contracts) {
		res.status(200).json(contracts);
	} else {
		res.status(404).json({ message: 'Contracts not found' });
	}
}

module.exports = {
	getAllContracts,
	getContractsByUserId,
};
