const userRepository = require('../repository/userRepository');
const contractRepository = require('../repository/contractRepository');

function getUsers(req, res, next) {
	const users = userRepository.getAllUsers();

	res.status(200).json(users);
}

function getOneUser(req, res, next) {
	const userId = req.params.userId;
	const user = userRepository.getOneUser(userId);

	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).json({ message: 'User not found' });
	}
}

function getContracts(req, res, next) {
	const userId = req.params.userId;
	const contracts = contractRepository.getContractByUser(userId);

	if (contracts) {
		res.status(200).json(contracts);
	} else {
		res.status(404).json({ message: 'Contracts not found' });
	}
}

module.exports = {
	getUsers,
	getContracts,
	getOneUser,
};
