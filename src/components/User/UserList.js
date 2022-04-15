import React from "react";
import { Link } from "react-router-dom";

function UserList({ userData, handleDeleteUser }) {
  //handleDelete
  // let handleDelete = (id) => {
  //   console.log(id);
  //   handleDeleteUser(id);
  // };
  return (
    <>
      <div className="container d-flex mt-3">
        {userData.map((item) => (
          <div className="card m-1" style={{ width: "18rem" }} key={item.id}>
            <img
              src={item.image}
              className="card-img-top mx-auto"
              alt={item.FirstName}
              style={{ width: "12rem", height: "12rem" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                Details of{" "}
                <span className="text-primary">
                  <u>{item.FirstName}</u>
                </span>
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">FirstName : {item.FirstName}</li>
              <li className="list-group-item">LastName : {item.LastName}</li>
              <li className="list-group-item">
                Designation : {item.Designation}
              </li>
              <li className="list-group-item">
                Experience : {item.Experience}
              </li>
              <li className="list-group-item">D.o.b : {item.Dob}</li>
            </ul>
            <div className="card-body d-flex justify-content-between">
              <Link to={{ pathname : '/edit', state: {item} }}>
                <button type="button" class="btn btn-warning">
                  Edit User
                </button>
              </Link>

              <button
                type="button"
                class="btn btn-danger"
                onClick={() => handleDeleteUser(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserList;
