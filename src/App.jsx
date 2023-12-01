import './style/app.scss'
import {  Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from './components/home/Home'
import Data from './components/data/Data'
import Transaction from "./components/transaction/Transaction";
import NoPage  from "./components/noPage/NoPage"

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="data" element={<Data />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App
