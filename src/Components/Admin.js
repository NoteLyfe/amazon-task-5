import React from 'react'
import image from '../images/Vector.png'

const Admin = () => {
  return (
    <>

      <div className="client">
        <h1>Add New Product</h1>
      </div>

      <div className="drag-drop">
        <img src={image} alt="" /><br />
        <a href="" className="addProductImage">+Add Product Image</a><br />
        <a href="" className="dragImage">or drop images here</a>
      </div>

      <hr />

      <div className="info">
        <h3>Vital Info</h3>
        
          <label htmlFor="id" >Product Id </label>
          <input type="text" placeholder='Enter Product Id'/><br />
          <label htmlFor="product name" >Product Name </label>
          <input type="text" placeholder='Enter Product Name'/><br />
          <label htmlFor="brand name" >Brand Name </label>
          <input type="text" placeholder='Enter Brand Name'/><br />
          <label htmlFor="stock" >Total Stock </label>
          <input type="text" placeholder='Enter Available Stock'/>
        
      </div>

      <hr />

      <div className="variation-info">
        <h3>Variation Info</h3>

        <label className='tick' htmlFor="boolean">Does this product have variations?</label>
        <input type="radio" name="yes" id='yes'/>
        <label className='lable-radio' htmlFor="yes">yes</label>
        <input type="radio" name="No" id='no'/>
        <label className='lable-radio' htmlFor="No">No</label><br />
        <label htmlFor="type">Variation Type</label>
        <select name="Size" id="">
        <option >Select...</option>
        <option value="Size">Size</option>
        <option value="color">Color</option>
        </select><br />
        <label htmlFor="size">Size Details</label>
        <input type="text" placeholder='Enter all sizes and seperate them with comma “,”'/>
 
      </div>

      <hr />

      <div className="offer-info">
        <h3>Offer Info</h3>
        <label htmlFor="">Price of product</label>
        <input type="text" placeholder='Price'/>
        <label className='tick' htmlFor="boolean">Do you want to add discount?</label>
        <input type="radio" name="yes" id='yes'/>
        <label className='lable-radio' htmlFor="yes">yes</label>
        <input type="radio" name="No" id='no'/>
        <label className='lable-radio' htmlFor="No">No</label><br />
        <label htmlFor="">Discount %</label>
        <input type="text" placeholder='Discount  %'/>
      </div>

      <hr />

      <div className="other-info">
      <h3>Other Info</h3>
      <label className='head-discript' htmlFor="">Product Description</label><br />
      <textarea name="Description" id="Description" placeholder='Description' cols="30" rows="10"></textarea>
      </div>

    </>
  )
}

export default Admin
