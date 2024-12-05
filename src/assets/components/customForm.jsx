import React, { useState } from "react";
import axios from "axios";
import './styles.css';

const url = "https://reactunit5-eace6-default-rtdb.firebaseio.com/formdetails.json";

function CustomForm() {
  return (
    <>
      <DisplayData />
      <AddData />
    </>
  );
}

// Fetching data (GET)
function DisplayData() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    try {
      let res = await axios.get(url);
      let data = Object.entries(res.data);
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log("There is an error while fetching data", err);
    }
  }

  return (
    <React.Fragment>
      <button type="button" onClick={fetchData} id="fetch">
        Show Users
      </button>
      <div id="show-data">
        {users.map((elm, idx) => (
          <div id="box" key={idx}>
            <h3>{idx + 1}.</h3>
            <h3>Name: {elm[1].name}</h3>
            <h3>Email: {elm[1].email}</h3>
            <p>Message: {elm[1].message}</p>
            <p>Priority: {elm[1].priority}</p>
            <p>Checkbox: {elm[1].checkbox ? "Checked" : "Unchecked"}</p>
            <p>Gender: {elm[1].gender}</p>
            <p>Date: {elm[1].date}</p>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

// Adding data (POST)
const AddData = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    priority: "",
    checkbox: false,
    gender: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(url, formData);
      alert("User added successfully");
      setFormData({
        name: "",
        email: "",
        message: "",
        priority: "",
        checkbox: false,
        gender: "",
        date: "",
      });
    } catch (error) {
      console.log("There is an error while posting data", error);
    }
  };

  return (
    <div className="custom-form-container">
      <h2>Custom Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>College:</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="">Select</option>
            <option value="low">College1</option>
            <option value="high">College2</option>
          </select>
        </div>
        
        <div>
          <label>Gender</label>
          <div>
            <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={handleChange} /> male
            <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={handleChange} /> female
          </div>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div id="check">
          <label>Accept terms and conditions:</label>
          <input type="checkbox" name="checkbox" checked={formData.checkbox} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
