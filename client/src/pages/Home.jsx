import React, { useEffect, useState, useRef } from 'react';
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css"
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useQuery } from '@apollo/client';
import {
  GET_TRANSACTIONS, GET_TRANSACTIONBYDATE,
  GET_TRANSACTIONBYNAME, GET_TRANSACTIONBYTYPE,
  GET_TRANSACTIONBYAMOUNT, GET_TRANSACTIONBYSTATUS
} from '../queries/projectQueries';
import _ from 'lodash';
import Modal from '../components/Modal';
import GroupedTransactions from '../components/GroupedTransactions';
import Filter from '../components/Filter';
import SearchTransactions from '../components/SearchTransactions';
import Spinner from '../components/Spinner';
import Errormessage from '../components/Errormessage';

//// check this feild before deployment
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        transactions: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});

export default function Home() {
  // let date = "2021-12-12"
  // const { loading, error, data } = useQuery(GET_PROJECTBYDATE, { variables: { date } });
  // console.log(data.projectbydate)
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [searchFeild, setsearchFeild] = useState("")
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);
  const [groupedTransactions, setgroupedTransactions] = useState([])
  const [inputSearchTerm, setinputSearchTerm] = useState("")
  const [perView, setperView] = useState(4)

  const UNIQUE_CLASS = "posts"
  const MY_GLIDE = new Glide(`.${UNIQUE_CLASS}`, {
    // @ts-ignore
    direction:
      document.querySelector("html")?.getAttribute("dir") === "rtl"
        ? "rtl"
        : "ltr",
    perView: perView,
    gap: 5,
    bound: true,
    breakpoints: {
      1280: {
        perView: perView - 1,
      },
      1023: {
        perView: perView - 2 || 1.2,
        gap: 4,
      },
      767: {
        perView: perView - 2 || 1.2,
        gap: 4,
      },
      639: {
        perView: 3.5,
        gap: 4,
      },
    },
  });

  useEffect(
    () => {
      if (loading) return
      if (error) return
      if (!MY_GLIDE) return;
      MY_GLIDE.mount();
    }, [MY_GLIDE]
  );

  const GroupData = (dataToGroup) => {
    var result = _(dataToGroup)
      .groupBy('date')
      .map(function (items, bdate) {
        return {
          date: bdate,
          trans: [items]
        };
      }).value();
    // setgroupedTransactions(result)

    const sorted = result.sort((a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime())
    setgroupedTransactions(sorted)
    console.log(sorted)
  }

  useEffect(() => {
    // GQLStatusSearch("pending")
    if (!error && !loading) {
      console.log(data.transactions)
      GroupData(data.transactions)
      console.log(groupedTransactions)
    }

  }, [data])


  ////   SEARCH FOR DATA

  const activateSearch = (searchSelected) => {
    setOpen(true)
    setsearchFeild(searchSelected)
  }

  const GRAPHQLSEARCH = () => {
    console.log(inputSearchTerm)
    //validate inputSearchTerm before seraching
    if (inputSearchTerm === "") return

    if (searchFeild === "amount") {
      //value must be converted to number
      GQLAmountSearch()
    } else if (searchFeild === "date") {
      GQLDateSearch()
    } else if (searchFeild === "name") {
      GQLNameSearch()
    } else if (searchFeild === "status") {
      GQLStatusSearch()
    } else if (searchFeild === "type") {
      GQLTypeSearch()
    }

    setOpen(!open)
    setinputSearchTerm("")
  }

  const GQLAmountSearch = async () => {
    try {
      const response = await client.query({
        query: GET_TRANSACTIONBYAMOUNT,
        variables: {
          amount: parseFloat(inputSearchTerm),
        },
      })
      console.log(response.data)
      GroupData(response.data.transactionbyamount)
    } catch (error) {

    }

    // CALL GROUP DATA
  }

  const GQLNameSearch = async () => {
    try {
      const response = await client.query({
        query: GET_TRANSACTIONBYNAME,
        variables: {
          name: inputSearchTerm,
        },
      })
      console.log(response.data)
      GroupData(response.data.transactionbyname)
    } catch (error) {

    }

    // CALL GROUP DATA
  }

  const GQLStatusSearch = async () => {
    try {
      const response = await client.query({
        query: GET_TRANSACTIONBYSTATUS,
        variables: {
          status: inputSearchTerm,
        },
      })
      console.log(response.data)
      GroupData(response.data.transactionbystatus)
      // CALL GROUP DATA
    } catch (error) {
      console.log(error)
    }

  }

  const GQLTypeSearch = async () => {
    try {
      const response = await client.query({
        query: GET_TRANSACTIONBYTYPE,
        variables: {
          type: inputSearchTerm,
        },
      })
      console.log(response.data)
      GroupData(response.data.transactionbytype)
    } catch (error) {

    }
  }


  const GQLDateSearch = async () => {
    try {
      const response = await client.query({
        query: GET_TRANSACTIONBYDATE,
        variables: {
          date: inputSearchTerm,
        },
      })
      GroupData(response.data.transactionbydate)

    } catch (error) {
      console.log(error)
    }

  }

  const DateSearch = () => {
    let filter = []
    filter = data.transactions.filter(transaction => {
      return transaction.date === inputSearchTerm
    })
    GroupData(filter)
  }

  function containsNumber(str) {
    return /^\d+$/.test(str);
  }

  const filteredData = (search) => {
    const filter = data.transactions.filter(transaction => {
      if (containsNumber(search)) {
        return transaction.amount === parseFloat(search)
      }

      let a = transaction.type.toLowerCase().includes(search.toLowerCase())
      let b = transaction.status.toLowerCase().includes(search.toLowerCase())
      let c = transaction.description.toLowerCase().includes(search.toLowerCase())
      let d = transaction.name.toLowerCase().includes(search.toLowerCase())

      if (a != []) {
        return a
      }

      if (b != []) {
        return b
      }

      if (c != []) {
        return c
      }

      if (d != []) {
        return d
      }
    })

    GroupData(filter)
  }






  if (loading) return <Spinner />;
  if (error) return <Errormessage />;
  if (groupedTransactions == []) return
  if (groupedTransactions !== []) return (
    <div className="container mx-auto">

      <SearchTransactions filteredData={filteredData} />
      <Filter activateSearch={activateSearch} />

      <GroupedTransactions groupedTransactions={groupedTransactions} />

      <Modal open={open} setOpen={setOpen} inputSearchTerm={inputSearchTerm} searchFeild={searchFeild} GRAPHQLSEARCH={GRAPHQLSEARCH} cancelButtonRef={cancelButtonRef} setinputSearchTerm={setinputSearchTerm} />



    </div>
  );
}



