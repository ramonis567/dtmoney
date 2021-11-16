import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

createServer({
  routes(){
    this.namespace = "api";

    this.get("/transactions", ()=>{
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          date: new Date()
        },
        {
          id: 2,
          title: "Desenvolvimento de Website",
          amount: 12000,
          type: "deposit",
          category: "Venda",
          date: new Date()
        },
        {
          id: 3,
          title: "Lanche",
          amount: 60,
          type: "withdraw",
          category: "Food",
          date: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
