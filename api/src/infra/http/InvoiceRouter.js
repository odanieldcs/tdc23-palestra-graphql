const express = require('express');
const invoiceController = require('../../application/controller/invoiceController');

const router = express.Router();

router.get('/', invoiceController.getAllInvoices);
router.get('/:contractId/invoices', invoiceController.getInvoicesByContractId);

module.exports = router;
