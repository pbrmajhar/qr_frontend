import React from "react";
const Form = ({
  fullname,
  setFullname,
  number,
  setNumber,
  price,
  setPrice,
  used,
  setUsed,
  saveHandle,
}) => (
  <form class="col s3" onSubmit={saveHandle}>
    <div class="row">
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          onChange={(e) => setFullname(e.target.value)}
          value={fullname}
        />
        <label htmlFor="name">Full Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field">
        <input
          id="number"
          type="text"
          class="validate"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label htmlFor="number">Phone Number</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field">
        <input
          id="price"
          type="text"
          defaultValue="5"
          class="validate"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="price">Price</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field">
        <input
          id="used"
          type="text"
          defaultValue="5"
          class="validate"
          value={used}
          onChange={(e) => setUsed(e.target.value)}
        />
        <label htmlFor="used">Price</label>
      </div>
    </div>
    <button class="waves-effect waves-light btn" type="submit">
      Save
    </button>
  </form>
);

export default Form;
