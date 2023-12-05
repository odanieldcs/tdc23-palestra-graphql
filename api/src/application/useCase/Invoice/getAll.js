const paymentRepository = require('../../repository/invoiceRepository');

function execute() {
	return paymentRepository.getAllInvoices();
}

module.exports = execute;
