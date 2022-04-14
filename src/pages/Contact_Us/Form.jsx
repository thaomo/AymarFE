import React, { useState } from "react";
import './ContactUs.css'
import axios from "axios"

function Form() {

  const [input, setInput] = useState({
    email: '',
    message: '',
  })

  function handleChange(event) {
    const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event){
    event.preventDefault();
    const newForm = {
      email: input.email,
      message: input.message,
    }

    axios.post('http://localhost:3001/create', newForm)
    console.log(input);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-200"></div>
      <div className="w-full max-w-sm m-auto flex flex-col my-32">
        <form>

          <div className="mb-4 center-block">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Email"
            >
              Your Email
            </label>
            <input
              className="form-group"
              autoComplete="off"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={input.email}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm text-center font-bold mb-2"
              htmlFor="message"
            >
              Message For Us
            </label>
            <textarea
            className="form-group"
            autoComplete="off"
            type="text"
            onChange={handleChange}
            name="message"
            placeholder="Message in here"
            value={input.message}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={handleClick}
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;