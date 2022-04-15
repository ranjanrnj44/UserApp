import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

//import context
import { context } from "../../App";

function EditUser(props) {
  let { name, handleEditUser } = useContext(context);
  console.log(`Name is : ${name}`);
  //history
  let history = useHistory();

  let { item } = props.location.state;
  console.log(item);
  //handleDelete
  //state
  let [fname, setFname] = useState(item.FirstName);
  let [lname, setLname] = useState(item.LastName);
  let [deg, setDeg] = useState(item.Designation);
  let [exp, setExp] = useState(item.Experience);
  let [dob, setDob] = useState(item.Dob);

  //handleChange
  let handleSubmit = (e) => {
    e.preventDefault();
    let newUserData = {
      FirstName: fname,
      LastName: lname,
      Designation: deg,
      Experience: exp,
      Dob: dob,
      id: item.id,
      image: item.image,
    };
    console.log(newUserData);
    handleEditUser(newUserData);
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
              Update User
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditUser;
