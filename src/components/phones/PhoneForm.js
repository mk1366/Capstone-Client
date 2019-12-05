import React from 'react'
import { Link } from 'react-router-dom'

const PhoneForm = ({ model, state, company, description, price, handleSubmit, handleChange, cancelPath }) => (
  <form className="input" onSubmit={handleSubmit}>
    <label>Model</label>
    <input
      placeholder="Model"
      defaultValue={model}
      name="model"
      onChange={handleChange}

    />
    <label>State</label>
    <input
      placeholder="State"
      defaultValue={state}
      name="state"
      onChange={handleChange}
    />

    <label>Company</label>
    <input
      placeholder="Company"
      defaultValue={company}
      name="company"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="Description"
      defaultValue={description}
      name="description"
      onChange={handleChange}
    />

    <label>Price</label>
    <input
      placeholder="Price"
      defaultValue={price}
      name="price"
      onChange={handleChange}
    />

    <button className="btn" type="submit">Submit</button>
    <Link to={cancelPath}>
      <button className="btn">Cancel</button>
    </Link>
  </form>
)

export default PhoneForm
