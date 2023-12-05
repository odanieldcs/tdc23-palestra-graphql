const database = require('../../../data/database.json');

function getAllUsers() {
	return database.users;
}

function getOneUser(userId) {
	const user = database.users.filter((user) => user.id === Number(userId));

	return user.length > 0 ? user[0] : null;
}

module.exports = {
	getAllUsers,
	getOneUser,
};
