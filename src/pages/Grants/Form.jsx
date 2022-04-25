import React, { useState } from "react";
//import axios from "axios"
import { useHistory } from "react-router-dom";
import './Grants.css'


function Form() {

  const history = useHistory();
  const [isPending, setIsPending] = useState(false);
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
    isUnusual: false,
    isExceptional: false,
    isDuncan: false,
    sportsInvolved: '',
    listOfSports: '',
    coachName: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: type === 'checkbox' ? checked : value
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
      isUnusual: input.isUnusual,
      isExceptional: input.isExceptional,
      isDuncan: input.isDuncan,
      sportsInvolved: input.sportsInvolved,
      listOfSports: input.listOfSports,
      coachName: input.coachName,
      message: input.message,
    }
    console.log(input);
    //axios.post('https://thaomo-project1.herokuapp.com/create', newForm);
    setIsPending(true);
    fetch('https://thaomo-project1.herokuapp.com/create', {

      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(newForm),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(() => {
      setIsPending(false);
    })
    history.push('/');
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-200"></div>
      <div className="w-full max-w-sm m-auto flex flex-col my-32" style={{}}>
        <form onSubmit={handleClick} id='grantForm' style={{ width: "50%", margin: "auto" }}>
          <span>
            <input
              style={{ width: "45%" }}
              type="text"
              name="lName"
              placeholder="Last Name"
              onChange={handleChange}
              value={input.lName}
              required
            />
            <input
              style={{ width: "45%", marginLeft: "15px" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="fName"
              placeholder="First"
              onChange={handleChange}
              value={input.fName}
              required
            />
          </span>
          <br></br>
          <br></br>
          <span>
            <input
              style={{ width: "45%" }}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              type="text"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              value={input.age}
            />
            <select onChange={handleChange} name="gender" style={{ width: "45%", height: "28px", marginLeft: "15px" }}>
              <option default value="gender">
                Gender
              </option>
              <option value="Male">
                Male
              </option>
              <option value="Female">
                Female
              </option>
            </select>
          </span>
          <br></br>
          <br></br>
          <div>
            <input
              style={{ width: "92%", margin: "auto" }}
              className="form-group"
              autoComplete="off"
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleChange}
              value={input.address}
            />
          </div>
          <br></br>
          <span>
            <input
              style={{ width: "45%" }}
              type="text"
              name="currentSchool"
              placeholder="Current School"
              onChange={handleChange}
              value={input.currentSchool}
            />
            <input
              style={{ width: "45%", marginLeft: "15px" }}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              type="text"
              name="gpa"
              placeholder="Grade Point Average"
              onChange={handleChange}
              value={input.gpa}
              required
            />
          </span>
          <br></br>
          <br></br>
          <span>
            <input
              style={{ width: "45%" }}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
              }}
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              value={input.phone}
            />
            <input
              style={{ width: "45%", marginLeft: "15px" }}
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={input.email}
              required
            />
          </span>
          <br></br>
          <br></br>
          <input
            style={{ width: "92%" }}
            type="text"
            name="teacherName"
            placeholder="Teacher's Name"
            onChange={handleChange}
            value={input.teacherName}
          />
          <br></br>
          <br></br>
          <div style={{ width: "50%" }}>
            <label>Grants Applying For:</label>
            <div>
              <input type="checkbox" onChange={handleChange} name='isUnusual' value={input.isUnusual} />
              <label>Unusual Circumstances</label>
            </div>
            <div>
              <input type="checkbox" onChange={handleChange} name='isExceptional' value={input.isExceptional} />
              <label>Exceptional Student</label>
            </div>
            <div>
              <input type="checkbox" onChange={handleChange} name='isDuncan' value={input.isDuncan} />
              <label>Duncan Student Athlete</label>
            </div>
          </div>
          <br></br>
          <hr style={{ width: "92%" }}></hr>
          <div>
            <div style={{ width: "45%", float: "left" }}>
              <label>Involved in any sports?</label>
              <br></br>
              <div>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="sportsInvolved"
                  value="Yes"
                />
                <label>Yes</label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="sportsInvolved"
                  value="No"
                />
                <label>No</label>
              </div>
            </div>
            <input
              style={{ width: "45%", marginLeft: "15px" }}
              type="text"
              placeholder="List all sports"
              name="listOfSports"
              value={input.listOfSports}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <br></br>
          <div >
            <textarea
              style={{ width: "92%", height: "100px" }}
              type="text"
              onChange={handleChange}
              name="coachName"
              placeholder="Name of your coach(es):"
              value={input.coachName}
            />
          </div>
          <div >
            <textarea
              style={{ width: "92%", height: "100px" }}
              type="text"
              onChange={handleChange}
              name="message"
              placeholder="Please provide a brief summary of what this grant will help you with."
              value={input.message}
            />
          </div>
          <br></br>
          <div className="flex items-center justify-between">
            {!isPending && <button
              style={{ width: "92%" }}
              type="submit"
              className="btn btn-primary"
            >
              Submit Form
            </button>}
            {isPending && <button
              style={{ width: "92%" }}
              type="submit"
              className="btn btn-primary"
              disabled>Submitting Application...</button>}

          </div>
        </form>
      </div>
    </div >
  );
}

export default Form;