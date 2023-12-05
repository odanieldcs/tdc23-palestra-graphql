const express = require('express');
const contractController = require('../../application/controller/contractController');
const invoicesController = require('../../application/controller/invoiceController');

const router = express.Router();

router.get('/', contractController.getAllContracts);
router.get('/:contractId/invoices', invoicesController.getInvoicesByContractId);

module.exports = router;
