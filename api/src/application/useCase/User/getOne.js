const userRepository = require('../../repository/userRepository');
const contractRepository = require('../../repository/contractRepository');
const invoiceRepository = require('../../repository/invoiceRepository');

function execute(userId) {
	const user = userRepository.getOneUser(userId);
	const contracts = contractRepository.getContractByUser(userId);
	const contractsWithInvoices = contracts?.map((contract) => {
		const invoices = invoiceRepository.getInvoicesByContract(contract.id);

		return {
			...contract,
			invoices,
		};
	});

	return {
		...user,
		contracts: contractsWithInvoices,
	};
}

module.exports = {
	execute,
};
