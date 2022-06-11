import React from 'react'
import star from '../images/Star.png'
import {Link} from 'react-router-dom'

const Catalog = (props) => {
  return (
      <Link to={{ pathname: `/Pdp/${props.id}/${props.name}` }}>
        <div className="box" key={props.id}>
          <div className="image">
            <img src={props.image} alt="shoe.jpg" />
          </div>

          <div className="p_info">
            <div className="brand_star">
              <div className="b_name">
                <h3 className="brand">{props.name}</h3>
              </div>
              <div className="rating">
                <span><img src={star} alt="" /></span>
                <span className="random_rating">{props.rating}</span>
              </div>
            </div>
            <h2 className="price">₹<span className="price_tag">{props.price}</span></h2>
            <small>Delivery by: <span className="delivery">{props.date}</span></small>
          </div>
        </div>
      </Link>
  )
}

export default Catalog
