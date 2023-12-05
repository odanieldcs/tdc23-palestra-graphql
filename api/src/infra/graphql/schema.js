const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLString,
	GraphQLID,
	GraphQLInt,
} = require('graphql');
const resolvers = require('./resolvers');

const InvoiceType = new GraphQLObjectType({
	name: 'Invoice',
	fields: {
		id: {
			type: GraphQLID,
		},
		contractId: {
			type: GraphQLID,
		},
		amount: {
			type: GraphQLInt,
		},
		date: {
			type: GraphQLString,
		},
		status: {
			type: GraphQLString,
		},
	},
});

const ContractType = new GraphQLObjectType({
	name: 'Contract',
	fields: {
		id: {
			type: GraphQLID,
		},
		userId: {
			type: GraphQLInt,
		},
		amount: {
			type: GraphQLInt,
		},
		date: {
			type: GraphQLString,
		},
		contractNumber: {
			type: GraphQLInt,
		},
		status: {
			type: GraphQLString,
		},
		invoices: {
			type: new GraphQLList(InvoiceType),
		},
	},
});

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: {
		id: {
			type: GraphQLID,
		},
		name: {
			type: GraphQLString,
		},
		email: {
			type: GraphQLString,
		},
		age: {
			type: GraphQLInt,
		},
		contracts: {
			type: new GraphQLList(ContractType),
		},
	},
});

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQuery',
		fields: {
			hello: {
				type: GraphQLString,
				resolve: resolvers.hello,
			},
			users: {
				type: new GraphQLList(UserType),
				resolve: resolvers.users,
			},
			user: {
				type: UserType,
				args: {
					id: {
						type: GraphQLID,
					},
				},
				resolve: resolvers.user,
			},
		},
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutation',
		fields: {
			message: {
				type: GraphQLString,
				args: {
					text: {
						type: GraphQLString,
					},
				},
				resolve: resolvers.message,
			},
		},
	}),
});

module.exports = schema;
