
import * as API from "./socket-api";
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import OrderPage from './pages/orderPage';

function App() {
  const [result, setResult] = useState(0);
  useEffect(() => {
    API.subscribe(({ result }: any) => {
      console.log('client', result);
      setResult(result);
    })
  },[])
  return (
    <div className="App">
      <OrderPage />
      <h1>{ result }</h1>
    </div>
  );
}

export default App;
