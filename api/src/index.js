const express = require('express');
const bodyParser = require('body-parser');
const { createHandler } = require('graphql-http/lib/use/express');
const userRouter = require('./infra/http/UserRouter');
const contractRouter = require('./infra/http/ContractRouter');
const invoiceRouter = require('./infra/http/InvoiceRouter');
const schemaGraphQL = require('./infra/graphql/schema');

const app = new express();

app.use(bodyParser.json());
app.get('/hello', (req, res, next) => {
	res.status(200).json({ message: 'hello world!' });
});
app.use('/users', userRouter);
app.use('/contracts', contractRouter);
app.use('/invoices', invoiceRouter);

app.use(
	'/graphql',
	createHandler({
		schema: schemaGraphQL,
	})
);

app.listen(8001, () => {
	console.log('API is running');
});
