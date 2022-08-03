import { useState } from 'react';
import './App.css';


function App() {
const [users, selectUsers]= useState([])
  return (
    <div className="App">
      <h1>Ecommerce Store</h1>
      <input type='text' placeholder='enter items' className='search'/>
      <div className='card-list'>
      <div className="card-container">
      <img src='https://i.rtings.com/assets/products/CWsm581T/nikon-z-50/design-small.jpg'
       width="200px"
       height='200px'
       alt="Product-image"/>
       <h2>camera</h2>
       <p>Price 50$</p>
      </div>
      <div className="card-container">
      <img src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
       width="200px"
       height='200px'
       alt="Product-image"/>
       <h2>Flower</h2>
       <p>Price 5$</p>
      </div>
      <div className="card-container">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySGSKuRvuOWELPpNwGNCGxB4mXpHLKHy2jCkzQplriiCka3RfrDywBpR6Khh8WgqpyPQ&usqp=CAU'
       width="200px"
       alt="Product-image"/>
       <h2>Protein Pack</h2>
       <p>Price 200$</p>
      </div>
      <div className="card-container">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsYKQGfYcHDWUKNP46kYP5VNF1h1JgYyt-bi1BwchuTyhXa2PdTtNqbVEpm5wIqfeSR0&usqp=CAU'
       width="200px"
       alt="Product-image"/>
       <h2>Hicking Bag</h2>
       <p>Price 100$</p>
      </div>
      <div className="card-container">
      <img src='https://cdn.shopify.com/s/files/1/0525/6462/3524/products/Insulated-Stainless-Steel-Water-Bottle-Lifestyle-Red-Original-Stainless-Steel_650x830_crop_center.png?v=1658840216'
       width="200px"
       alt="Product-image"/>
       <h2>Water Bottle</h2>
       <p>Price 50$</p>
      </div>
      <div className="card-container">
      <img src='https://images-eu.ssl-images-amazon.com/images/I/61zdQQORNML.__AC_SY445_SX342_QL70_ML2_.jpg'
       width="200px"
       alt="Product-image"/>
       <h2>Apple Ipad</h2>
       <p>Price 100$</p>
      </div>
      <div className="card-container">
      <img src='https://m.media-amazon.com/images/I/817a2qVUNLL._SL1500_.jpg'
       width="200px"
       height='200px'
       alt="Product-image"/>
       <h2>Child Seat</h2>
       <p>Price 30$</p>
      </div>
      <div className="card-container">
      <img src='https://m.media-amazon.com/images/I/611Ay5-0xHL._AC_SL1500_.jpg'
       width="200px"
       alt="Product-image"/>
       <h2>Mobile Holder</h2>
       <p>Price 20$</p>
      </div>
      <div className="card-container">
      <img src='https://m.media-amazon.com/images/I/710pThLLP-L._AC_SL1500_.jpg'
       width="200px"
       height='150px'
       alt="Product-image"/>
       <h2>Gaming keyboard</h2>
       <p>Price 50$</p>
      </div>
      <div className="card-container">
      <img src='https://m.media-amazon.com/images/I/71O9jEaWkpL._AC_SL1500_.jpg'
       width="200px"
       alt="Product-image"/>
       <h2>Dell Laptop</h2>
       <p>Price 150$</p>
      </div>
   </div>
</div>
  );
}

export default App;
