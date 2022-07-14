import { gql } from '@apollo/client';

const GET_TRANSACTIONS = gql`
  query getTransactions {
    transactions {
      id
      name
      description
      status
      date
      type
      amount 
     }
  }
`;

const GET_TRANSACTIONBYID = gql`
  query getTransaction($id: ID!) {
    transaction(id: $id) {
      id
      name
      description
      status
      date
      type
      amount 
    }
  }
`;

const GET_TRANSACTIONBYDATE = gql`
  query getTransactionbydate($date: String!) {
    transactionbydate(date: $date) {
      id
      name
      description
      status
      date
      type
      amount 
    }
  }
`;

const GET_TRANSACTIONBYNAME = gql`
  query getTransactionbyname($name: String!) {
    transactionbyname(name: $name) {
      id
      name
      description
      status
      date
      type
      amount 
    }
  }
`;



const GET_TRANSACTIONBYAMOUNT = gql`
  query getTransactionbyamount($amount: Float!) {
    transactionbyamount(amount: $amount) {
      id
      name
      description
      status
      date
      type
      amount 
    }
  }
`;

const GET_TRANSACTIONBYSTATUS = gql`
  query getTransactionbystatus($status: String!) {
    transactionbystatus(status: $status) {
      id
      name
      description
      status
      date
      type
      amount 
    }
  }
`;

const GET_TRANSACTIONBYTYPE = gql`
  query getTransactionbytype($type: String!) {
    transactionbytype(type: $type) {
      id
      name
      description
      status
      date
      type
      amount 
    }
  }
`;


export { GET_TRANSACTIONS, GET_TRANSACTIONBYID, GET_TRANSACTIONBYDATE, GET_TRANSACTIONBYAMOUNT, GET_TRANSACTIONBYNAME, GET_TRANSACTIONBYSTATUS, GET_TRANSACTIONBYTYPE };
