import React, { useState, useEffect } from "react";
import { Container, LeftBar, RightBar, BottomBar,Card, ProductButton, CategoryButton } from '../styles';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import TextField from '@mui/material/TextField';
import { getAllCategories } from '../controllers/CategoryController';

function Home (props) {
  const [counter, setCounter] = useState(0);
  const [cleaningCounter, setCleaningCounter] = useState(0);
  const [chessesCounter, setChessesCounter] = useState(0);
  const [vegNfruCounter, setVegNfruCounter] = useState(0);
  const [meatNfishCounter, setMeatNfishCounter] = useState(0);
  const [pastriesCounter, setPastriesCounter] = useState(0);
  const [currentCategory, setCurrentCategory] = useState({title: "Choose Category..."});
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
  }, [inputText]);


  const handleAddClick = () => {
    
    if (inputText.length === 0) {
      alert("Please fill the name of the product");
      return;
    }

    // Check if the product is already in the list
    const isDuplicate = productsList.find(item => item.title === inputText && item.category_id === currentCategory.id);
    var updatedProduct;
    
    // If not a duplicate, add the product to the list
    if (!isDuplicate) {
      updatedProduct = { title: inputText, counter: 1, category_id: currentCategory.id };

      setProductsList((prevList) => [...prevList, updatedProduct]);
      props.setProducts((prevList) => [...prevList, updatedProduct]);
      
      setCounter((prevCounter) => prevCounter + 1);
      props.setCounter((prevCounter) => prevCounter + 1);

      // increment the category counter
      switch (currentCategory.id) {
        case 1:
          setCleaningCounter((prevCounter) => prevCounter + 1);
          break;
        case 2:
          setChessesCounter((prevCounter) => prevCounter + 1);
          break;
        case 3:
          setVegNfruCounter((prevCounter) => prevCounter + 1);
          break;
        case 4:
          setMeatNfishCounter((prevCounter) => prevCounter + 1);
          break;
        case 5:
          setPastriesCounter((prevCounter) => prevCounter + 1);
          break;
        default:
          alert('Please choose category');
      }
    } else {
      
      // increase the product counter
      const updatedProducts = productsList.map((p) =>
      p.title === inputText ? { ...p, counter: p.counter + 1 } : p);
      setProductsList(updatedProducts);
      props.setProducts(updatedProducts);

      setCounter((prevCounter) => prevCounter + 1);
      props.setCounter((prevCounter) => prevCounter + 1);

      const foundProduct = updatedProducts.find(product => product.title === inputText);
      // increase the category counter
      foundProduct.category_id === 1 && setCleaningCounter((prev) => prev + 1);
      foundProduct.category_id === 2 && setChessesCounter((prev) => prev + 1);
      foundProduct.category_id === 3 && setVegNfruCounter((prev) => prev + 1);
      foundProduct.category_id === 4 && setMeatNfishCounter((prev) => prev + 1);
      foundProduct.category_id === 5 && setPastriesCounter((prev) => prev + 1);
    }
    
    //clear all fields
    setInputText("");
    setCurrentCategory({title: "Choose Category..."});
  }

  const handleCategoryClick = (category_id) => {
  
    if (category_id === 1) {
      setCurrentCategory({ title: "Cleaning", id: 1 });
    } else if (category_id === 2) {
      setCurrentCategory({ title: "Cheeses", id: 2 });
    } else if (category_id === 3) {
      setCurrentCategory({ title: "Veg N Fruits", id: 3 });
    } else if (category_id === 4) {
      setCurrentCategory({ title: "Meat N Fish", id: 4 });
    } else if (category_id === 5) {
      setCurrentCategory({ title: "Pastries", id: 5 });
    }
  };

  // get all categories from the database
  useEffect(() => {
    const getCategories = async () => {
      try {
        const _categories = await getAllCategories();
        setCategories(_categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getCategories();
  }, []); // Empty dependency array means this effect runs only once on mount

  return(
    <Container>
        <LeftBar>
            <DropdownButton id="dropdown-basic-button" title={currentCategory.title}>
            {categories.map(category => (
                <Dropdown.Item key={category.id} onClick={() => handleCategoryClick(category.id)}>
                {category.title}
                </Dropdown.Item>
            ))}
            </DropdownButton>
        </LeftBar>
        <RightBar>
            <TextField 
            style={{width: '300px'}}
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Add product..."/>
            <Button style={{width: '100px'}} onClick={() => handleAddClick()}>Add</Button>
        </RightBar>
        <BottomBar>
            <h4>Total: {counter}</h4>
            {categories.map(category => (
            <Card>
                <CategoryButton key={category.id}>
                {category.title} {"("}
                {category.id === 1 && cleaningCounter} 
                {category.id === 2 && chessesCounter}
                {category.id === 3 && vegNfruCounter} 
                {category.id === 4 && meatNfishCounter}
                {category.id === 5 && pastriesCounter}
                {")"}
                </CategoryButton>
                {productsList      
                .filter(product => product.category_id === category.id)
                .map(product => (
                <ProductButton key={category.id}>
                {product.title} {`(${product.counter})`}
                </ProductButton>
                ))}
            </Card>                
            ))}            
            <Button 
            style={{height: '60px', marginRight: '20px', marginLeft: '10px'}}
            onClick={() => props.navigate()}>Complete Order</Button>
        </BottomBar>
    </Container>
    );
}

export default Home;