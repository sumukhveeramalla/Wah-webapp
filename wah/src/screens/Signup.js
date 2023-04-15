import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  const [credentials, setcredentials] = useState({name:"", location:"", email:"", password:""})

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/CreateUser", {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: credentials.name,
            location: credentials.location,
            email: credentials.email,
            password: credentials.password
        })
    });

    const json = await response.json();
    console.log(json);

    if(!json.success){
        alert("Enter valid Credentials");
    }
  };

  const onChange = ()=>{
    setcredentials({...credentials, [window.event.target.name]:window.event.target.value})
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credentials.email}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="pswd" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credentials.password}
            id="pswd"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="addr" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={credentials.location}
            id="addr"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
            Already a User
        </Link>
      </form>
    </div>
  );
}
