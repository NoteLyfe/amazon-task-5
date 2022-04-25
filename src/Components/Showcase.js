import Data from '../data.json'
import lens from '../images/search.png'
import React, { useState } from 'react'
import Catalog from './Catalog'

const Showcase = () => {

  const [text, setText] = useState("");
  let search = (e) => {
    var lowercase = e.target.value.toLowerCase();
    setText(lowercase);
  }
  const data = Data.filter((x) => {
    if (text === "") {
      return x;
    }
    else {
      return x.name.toLowerCase().includes(text);
    }
  })

  return (
    <>
      <div className="company-info" >
        <div className="container">
          <h1>Shoe Company Name</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur similique minus eligendi. Nam odio sunt fuga explicabo veritatis neque! Repellat</p>

          <img src={lens} alt="lens" id="lens" />
          <input type="text" id='search-input' onChange={search} placeholder='Search Shoes' />
          <button id="btn">Search</button>
        </div>
      </div>

      <h3 id="prod-qty"><span id="qty">{data.length}</span> Products</h3>

      <div id="catalog">
        {data.map((item) => (
          <Catalog
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
            date={item.date}
          />
        ))}
      </div>
    </>
  )
}

export default Showcase
