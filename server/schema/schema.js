// const Project = require('../models/Project');
// const Client = require('../models/Client');
const { Transactions } = require('../sampleData.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');


//Project Type
const TransactionType = new GraphQLObjectType({
  name: 'Transaction',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    date: { type: GraphQLString },
    type: { type: GraphQLString },
    amount: { type: GraphQLFloat },
  }),
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve(parent, args) {
        // return transaction.find();
        // return clients.find((client) => client.id === args.id)
        return Transactions
      },
    },

    transaction: {
      type: TransactionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return transaction.findById(args.id);
        return Transactions.find(transaction => transaction.id === args.id)
      },
    },

    transactionbydate: {
      type: new GraphQLList(TransactionType),
      args: { date: { type: GraphQLString } },
      resolve(parent, args) {
        // return transaction.findById(args.id);
        return Transactions.filter(transaction => transaction.date === args.date)
      },
    },

    transactionbyamount: {
      type: new GraphQLList(TransactionType),
      args: { amount: { type: GraphQLFloat } },
      resolve(parent, args) {
        // return transaction.findById(args.id);
        return Transactions.filter(transaction => transaction.amount === args.amount)
      },
    },

    transactionbystatus: {
      type: new GraphQLList(TransactionType),
      args: { status: { type: GraphQLString } },
      resolve(parent, args) {
        // return transaction.findById(args.id);
        return Transactions.filter(transaction => transaction.status === args.status)
      },
    },

    transactionbytype: {
      type: new GraphQLList(TransactionType),
      args: { type: { type: GraphQLString } },
      resolve(parent, args) {
        // return transaction.findById(args.id);
        return Transactions.filter(transaction => transaction.type === args.type)
      },
    },

    transactionbyname: {
      type: new GraphQLList(TransactionType),
      args: { name: { type: GraphQLString } },
      resolve(parent, args) {
        // return transaction.findById(args.id);
        return Transactions.filter(transaction => transaction.name === args.name)
      },
    },

  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation,
});

