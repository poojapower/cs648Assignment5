/* eslint "react/prefer-stateless-function": "off" */
import React from 'react';

export default class ProductAddNew extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const addForm = document.forms.productAddNewForm;
    const productPrice = addForm.prodPrice.value;
    const product = {
      product_name: addForm.prodName.value,
      product_price: parseFloat(productPrice.substring(1, productPrice.length)),
      product_category: addForm.prodCategory.value,
      product_image: addForm.prodImage.value,
    };
    const { props } = this;
    props.createProduct(product);
    addForm.prodName.value = '';
    addForm.prodPrice.value = '$';
    addForm.prodImage.value = '';
  }

  render() {
    return (
      <div>
        <form name="productAddNewForm" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="column">
              <h4 className="addForm">Product Category</h4>
              <select name="prodCategory">
                <option>Shirts</option>
                <option>Jeans</option>
                <option>Jackets</option>
                <option>Sweaters</option>
                <option>Accessories</option>
              </select>

              <h4 className="addForm">Product Name</h4>
              <input type="text" name="prodName" placeholder="Product Name" />
            </div>
            <div className="column">
              <h4 className="addForm">Product Price</h4>
              <input defaultValue="$" type="text" name="prodPrice" />

              <h4 className="addForm">Image URL</h4>
              <input type="text" name="prodImage" placeholder="Product Image" />
            </div>
          </div>

          <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    );
  }
}
