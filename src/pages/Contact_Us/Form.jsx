import React, { useState } from "react";
import './form.css'
import axios from "axios"

function Form() {

  const [input, setInput] = useState({
    lName: '',
    fName: '',
    age: '',
    address: '',
    gender: '',
    currentSchool: '',
    gpa: '',
    phone: '',
    email: '',
    teacherName: '',
    grantsApplyingFor: '',
    sportsInvolved: '',
    listOfSports: '',
    coachName: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    const newForm = {
      lName: input.lName,
      fName: input.fName,
      address: input.address,
      age: input.age,
      gender: input.gender,
      currentSchool: input.currentSchool,
      gpa: input.gpa,
      phone: input.phone,
      email: input.email,
      teacherName: input.teacherName,
      grantsApplyingFor: input.grantsApplied,
      sportsInvolved: input.sportsInvolved,
      listOfSports: input.listOfSports,
      coachName: input.coachName,
      message: input.message,
    }

    axios.post('http://localhost:3001/create', newForm)
    console.log(input);
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-200"></div>
      <div className="w-full max-w-sm m-auto flex flex-col my-32">
        <form style={{ width: "50%", margin: "auto" }}>
          <span>
            <input
              style={{ width: "20%" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="lName"
              placeholder="Last Name"
              onChange={handleChange}
              value={input.lName}
              required
            />
            <input
              style={{ width: "20%", marginLeft: "10px" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="fName"
              placeholder="First"
              onChange={handleChange}
              value={input.fName}
              required
            />
            <input
              style={{ width: "20%", marginLeft: "10px" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              value={input.age}
              required
            />
            <select style={{ width: "20%", height: "28px", marginLeft: "10px" }}>
              <option default value="gender">
                Gender
              </option>
              <option value="male">
                Male
              </option>
              <option value="female">
                Female
              </option>
            </select>
          </span>
          <br></br>
          <br></br>
          <div>
            <input
              style={{ width: "50%", margin: "auto" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={input.address}
              required
            />
          </div>
          <br></br>
          <span>
            <input
              style={{ width: "50%" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="currentSchool"
              placeholder="Current School"
              onChange={handleChange}
              value={input.currentSchool}
              required
            />
            <input
              style={{ width: "50%" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="Grade Point Average"
              placeholder="Grade Point Average"
              onChange={handleChange}
              value={input.gpa}
              required
            />
          </span>
          <span>
            <input
              style={{ width: "50%" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={input.phone}
              required
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Email"
            >
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
          </span>
          <input
            style={{ width: "50%" }}
            className="form-group"
            autoComplete="off"
            type="text"
            name="teacherName"
            placeholder="Teacher's Name"
            onChange={handleChange}
            value={input.teacherName}
            required
          />
          <br></br>
          <span>

            <label>Grants Applying For:</label>
            <br></br>
            <input
              className="form-group"
              autoComplete="off"
              type="checkbox"
              name="unusual"
              placeholder="Grants Applying For"
              onChange={handleChange}
              value={input.grantsApplied}
              required
            />
            <label>Unusual</label>
            <input
              className="form-group"
              autoComplete="off"
              type="checkbox"
              name="exceptional"
              placeholder="Grants Applying For"
              onChange={handleChange}
              value={input.grantsApplied}
              required
            />
            <label>Exceptional Student</label>
            <input
              className="form-group"
              autoComplete="off"
              type="checkbox"
              name="studentAthlete"
              placeholder="Grants Applying For"
              onChange={handleChange}
              value={input.grantsApplied}
              required
            />
            <label>Duncan Student Athlete</label>
          </span>
          <br></br>
          <span>
            <label>Involved in any sports?</label>
            <input
              className="form-group"
              id="yes"
              type={"radio"}
              name="yes"
              onChange={handleChange}
              value="yes"
            />
            <label htmlFor="yes">Yes</label>
            <input
              className="form-group"
              id="no"
              type={"radio"}
              name="no"
              onChange={handleChange}
              value="no"
            />
            <label htmlFor="no">No</label>

          </span>

          <br></br>
          <br></br>
          <div >
            <label
              htmlFor="coachName"
            >
            </label>
            <textarea
              className="form-group"
              autoComplete="off"
              type="text"
              onChange={handleChange}
              name="coachName"
              placeholder="Name of your coach(es):"
              value={input.coachName}
            />
          </div>

          <div >
            <label
              className="block text-gray-700 text-sm text-center font-bold mb-2"
              htmlFor="message"
            >
            </label>
            <textarea
              className="form-group"
              autoComplete="off"
              type="text"
              onChange={handleChange}
              name="message"
              placeholder="Please provide a brief summary of what this grant will help you with."
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