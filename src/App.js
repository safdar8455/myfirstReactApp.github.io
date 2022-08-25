import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState, useEffect } from "react";

let USE_DUMMY_DATA = [
  {
    id: 'e1',
    title: 'school fee',
    price: 250,
    formdate: new Date(2021,5,12)
  },

  {
    id: 'e2',
    title: 'House Rent',
    price: 4050,
    formdate: new Date(2021,4,12)
  },

  {
    id: 'e3',
    title: 'Book one',
    price: 350,
    formdate: new Date(2021,9,12)
  }
];

const App = () => {
  const [webData, setWebData] = useState(USE_DUMMY_DATA);

  const fetchData = () => {
    fetch("http://localhost/dataapi/api-fetch-all.php")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWebData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const newExpance = (datap) => {

    fetch('http://localhost/dataapi/api-insert.php', {
            method: 'POST',
            body: JSON.stringify(datap),
            headers: {
                'content-Type' : 'application/json'
            }
        }).then(
            response => {
                fetchData();
            }
        );
  };

  return (
    <div>
      <NewExpense onNewExpance={newExpance} />
      <Expenses item={webData} />
    </div>
  );
};

export default App;
