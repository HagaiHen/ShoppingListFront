import './App.css';
import React, { useState } from "react";
import { Container } from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompletePage from './Pages/Complete';
import Home from './Pages/Home';

function App (props) {
  const [activePage, setActivePage] = useState("Home"); // State to track active page
  const [counter, setCounter] = useState(0);
  const [productsList, setProductsList] = useState([]);

  const handleCompleteClick = () => {
    if (counter > 0) {
      setActivePage("Complete");
    } else {
      alert("Please choose a least 1 item");
    }
  }

  const handleNavigate = (page) => {
    setCounter(0);
    setProductsList([]);
    setActivePage(page);
  }

return (
  <Container>
    {(() => {
      switch (activePage) {
        case "Home":
          return <Home navigate={handleCompleteClick} setProducts={setProductsList} setCounter={setCounter}/>;
        case "Complete":
          return <CompletePage navigate={handleNavigate} products={productsList}/>;
        default:
          return <div><h1>default</h1></div>;
      }
    })()}
  </Container>
  );
}

export default App;