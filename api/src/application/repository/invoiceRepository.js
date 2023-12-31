const database = require('../../../data/database.json');

function getAllInvoices(limit) {
	const invoices = database.invoices.slice(0, limit);
	return invoices;
}

function getInvoicesByContract(contractId) {
	const contracts = database.invoices.filter(
		(invoice) => invoice.contractId === Number(contractId)
	);

	return contracts.length > 0 ? contracts : null;
}

function getInvoiceById(invoiceId) {
	const invoice = database.invoices.filter(
		(invoice) => invoice.id === invoiceId
	);

	return invoice.length > 0 ? invoice[0] : null;
}

module.exports = {
	getAllInvoices,
	getInvoicesByContract,
	getInvoiceById,
};
