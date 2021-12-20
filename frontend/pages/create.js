//check auth
//reroute to login page in not authenticated
import React, { useState } from 'react';

export default function create() {
  return (
    <div className="container-sm min-vh-100">
      <form>
        {/* title */}
        <div className="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
            required
          />
        </div>
        {/* description */}
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            required
          ></textarea>
        </div>
        {/* price and condition */}
        <div className="form-group">
          <div class="form-group ">
            <label for="inputEmail4">$ Price</label>
            <input
              type="number"
              class="form-control"
              id="inputEmail4"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div class="form-group ">
            <label for="inputState">Condition</label>
            <select id="inputState" class="form-control">
              <option selected required>
                Choose...
              </option>
              <option>New</option>
              <option>Used - Like New</option>
              <option>Used - Good</option>
              <option>Used - Fair</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
