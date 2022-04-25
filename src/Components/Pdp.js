import React from 'react'
import data from '../data.json'
import star from '../images/Star.png'
import { useParams } from 'react-router-dom';
import pic1 from '../images/image1.png'
import pic2 from '../images/image2.png'
import pic3 from '../images/image3.png'
import pic4 from '../images/image4.png'
import pic5 from '../images/image5.png'
import pic6 from '../images/image6.png'

const Pdp = () => {

  setTimeout(() => {
    let qty = document.getElementById('qty-change-input');
    let add = document.getElementById('btn-inc');
    let sub = document.getElementById('btn-dec');
    let addToCart = document.getElementById('btn-add');

    let count = 0;

    add.addEventListener('click', function () {
      count += 1;
      qty.innerText = count;
    })

    sub.addEventListener('click', function () {
      if (count > 0) {
        count -= 1
        qty.innerText = count;
      }
    })

    addToCart.addEventListener('click', function () {
      if (count === 0) {
        alert("Please select valid Quantity..")
      }
      else {
        alert(count + " Item added to cart Successfully")
      }
    })

  }, 10);

  let { id } = useParams();

  let shoeImg;
  if ((id == 1) || (id == 7) || (id == 13) || (id == 19)) {
    shoeImg = pic1;
  }
  else if ((id == 2) || (id == 8) || (id == 14) || (id == 20)) {
    shoeImg = pic2;
  }
  else if ((id == 3) || (id == 9) || (id == 15)) {
    shoeImg = pic3;
  }
  else if ((id == 4) || (id == 10) || (id == 16)) {
    shoeImg = pic4;
  }
  else if ((id == 5) || (id == 11) || (id == 17)) {
    shoeImg = pic5;
  }
  else if ((id == 6) || (id == 12) || (id == 18)) {
    shoeImg = pic6;
  }

  return (
    <div className="pdp">
      <div className="pdp-img-div">
        <img className="pdp-img" src={shoeImg} alt="Shoe Image" />
      </div>

      <div className="pdp-info">

        <div className="name-rating">
          <h3 className="b-name">{data[id - 1].name}</h3>
          <div className="rating">
            <span><img src={star} alt="" /></span>
            <span>{data[id - 1].rating}</span>
          </div>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestias ut veniam quas quaerat, cum nihil tenetur facilis laborum! Deleniti eaque harum vitae, explicabo illo nostrum ex dolores. Nulla, facere.</p>

        <h2 className="price pdp-price">₹<span className="price_tag">{data[id - 1].price}</span></h2>

        <small className='pdp-delivery'>Delivery by: <span className="delivery ">{data[id - 1].date}</span></small>

        <h6>Qty</h6>
        <div className="pdp-qty-control">
          <button id="btn-dec" className="btn-qty">-</button>
          <div id="qty-change-input">0</div>
          <button id="btn-inc" className="btn-qty">+</button>
        </div>

        <button id="btn-add">Add to Cart</button>

      </div>

    </div>
  )
}

export default Pdp