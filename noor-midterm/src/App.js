import React, { useState } from 'react';
import './App.css';
import { submitData } from './utils'; // Import the submitData function
function App() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: ""
  });

  const [priceError, setPriceError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create an object to hold the form data
    const data = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      quantity: formData.quantity,
      price: formData.price
    };

    try {
      const response = await submitData(data); // Use the submitData function

      // Successfully submitted data to the server
      alert(response.message);
    } catch (error) {
      // Handle the case where the server returned an error
      alert(error.error);
    }
  };

  const resetAll = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: ""
    });
    setPriceError("");
  };


  return (
    <>
      <div className="container">
        <h1>New Product</h1>
        <form onSubmit={handleSubmit} onReset={resetAll}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder=""
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder=""
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder=""
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              placeholder=""
              min="0"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder=""
              name="price"
              value={formData.price}
              onChange={(event) => {
                const { value } = event.target;
                if (/^\d+$/.test(value) || value === '') {
                  setFormData({ ...formData, price: value });
                  setPriceError("");
                } else {
                  setPriceError("Price must be an integer.");
                }
              }}
            />
            {priceError && <div className="text-danger">{priceError}</div>}
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-between">
          <button type="submit" className="custom-submit-button btn btn-primary btn-lg me-md-2">
            SUBMIT
           </button>
          <button type="reset" id="reset" className="btn btn-secondary btn-lg">
           CANCEL
           </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
