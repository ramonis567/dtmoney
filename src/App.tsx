import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal';
Modal.setAppElement("#root")

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  
  function handleOpenNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(true);
  }
    
  function handleCloseNewTransactionModalOpen() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModalOpen} 
      />
      <Dashboard />
      <TransactionsTable />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModalOpen}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
