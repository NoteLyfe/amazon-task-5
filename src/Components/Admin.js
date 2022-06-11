import React from 'react'
import image from '../images/Vector.png'

const Admin = () => {

  setTimeout(() => {

    let upload_image = document.getElementById('addProductImage');
    let input = document.getElementById('upload');
    let drop = document.getElementById('drag-drop');
    let file;

    drop.addEventListener("drop", (event) => {
      event.preventDefault();
      file = event.dataTransfer.files[0];
      showFile();
    });

    drop.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    upload_image.onclick = () => {
      input.click();
    }

    input.addEventListener("change", function () {
      file = this.files[0];
      showFile();
    });

    function showFile() {
      let fileType = file.type;
      let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
      if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let fileURL = fileReader.result;
          let imgTag = `<img src="${fileURL}" alt="image" id="img">`;
          drop.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
      }
    }

  }, 10);

  return (
    <>

      <div className="admin">
        <h1>Add New Product</h1>
      </div>

      <div id="drag-drop">
        <img src={image} alt="" /><br />

        <button id="addProductImage">+Add Product Image</button><br />
        <input type="file" id='upload' hidden />
        <h2 className='dragtext'>Or Drop Images to Upload</h2>
      </div>

      <hr />

      <div className="info">
        <h3>Vital Info</h3>

        <label htmlFor="id" >Product Id </label>
        <input type="text" placeholder='Enter Product Id' /><br />
        <label htmlFor="product name" >Product Name </label>
        <input type="text" placeholder='Enter Product Name' /><br />
        <label htmlFor="brand name" >Brand Name </label>
        <input type="text" placeholder='Enter Brand Name' /><br />
        <label htmlFor="stock" >Total Stock </label>
        <input type="text" placeholder='Enter Available Stock' />

      </div>

      <hr />

      <div className="variation-info">
        <h3>Variation Info</h3>

        <label className='tick' htmlFor="boolean">Does this product have variations?</label>
        <input type="radio" name="yes" id='yes' />
        <label className='lable-radio' htmlFor="yes">yes</label>
        <input type="radio" name="No" id='no' />
        <label className='lable-radio' htmlFor="No">No</label><br />
        <label htmlFor="type">Variation Type</label>
        <select name="Size" >
          <option >Select...</option>
          <option value="Size">Size</option>
          <option value="color">Color</option>
        </select><br />
        <label htmlFor="size">Size Details</label>
        <input type="text" placeholder='Enter all sizes and seperate them with comma “,”' />

      </div>

      <hr />

      <div className="offer-info">
        <h3>Offer Info</h3>
        <label htmlFor="">Price of product</label>
        <input type="text" placeholder='Price' /><br />
        <label className='tick' htmlFor="boolean">Do you want to add discount?</label>
        <input type="radio" name="yes" id='yes' />
        <label className='lable-radio' htmlFor="yes">yes</label>
        <input type="radio" name="No" id='no' />
        <label className='lable-radio' htmlFor="No">No</label><br />
        <label htmlFor="">Discount %</label>
        <input type="text" placeholder='Discount  %' />
      </div>

      <hr />

      <div className="other-info">
        <h3>Other Info</h3>
        <label className='head-discript' htmlFor="">Product Description</label><br />
        <textarea name="Description" id="Description" placeholder='Description' cols="30" rows="10"></textarea>

        <button id="upload-btn">Upload Product</button>
      </div>

    </>
  )
}

export default Admin