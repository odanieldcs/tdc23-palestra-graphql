const invoiceRepository = require('../repository/invoiceRepository');

function getAllInvoices(req, res, next) {
	const invoices = invoiceRepository.getAllInvoices();

	res.status(200).json(invoices);
}

function getInvoicesByContractId(req, res, next) {
	const contractId = req.params.contractId;
	const invoices = invoiceRepository.getInvoicesByContract(contractId);

	if (invoices) {
		res.status(200).json(invoices);
	} else {
		res.status(404).json({ message: 'Invoices not found' });
	}
}

module.exports = {
	getAllInvoices,
	getInvoicesByContractId,
};
