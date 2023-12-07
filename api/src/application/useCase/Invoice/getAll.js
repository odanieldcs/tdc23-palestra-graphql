const paymentRepository = require('../../repository/invoiceRepository');

function execute(limit) {
	return paymentRepository.getAllInvoices(limit);
}

module.exports = {
	execute,
};
