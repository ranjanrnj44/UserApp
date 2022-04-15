import React, { useState } from "react";
//id
import { nanoid } from "nanoid";
//route
import { useHistory } from "react-router-dom";

function AddUser({ handleAddUser }) {
  //history
  let history = useHistory();
  //state
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [deg, setDeg] = useState("");
  let [exp, setExp] = useState("");
  let [dob, setDob] = useState("");

  //handleChange
  let handleSubmit = (e) => {
    e.preventDefault();
    let newUserData = {
      FirstName: fname,
      LastName: lname,
      Designation: deg,
      Experience: exp,
      Dob: dob,
      id: nanoid(),
    };
    console.log(newUserData);
    handleAddUser(newUserData);
    history.push("/");
  };

  return (
    <>
      <div className="container col-8">
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lname" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="des" className="form-label">
              Designation
            </label>
            <input
              type="text"
              className="form-control"
              id="des"
              value={deg}
              onChange={(e) => setDeg(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">
              year of Experience
            </label>
            <input
              type="text"
              className="form-control"
              id="fname"
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="lname" className="form-label">
              Date.Of.birth
            </label>
            <input
              type="date"
              className="form-control"
              id="lname"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary">
              Add New User
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUser;
