import React, { useState, useEffect } from "react";
import {
  createEmployee,
  updateEmployee,
  getEmployeeById,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      if (id) {
        //Update Employee
        const employee = { id, firstName, lastName, email };
        console.log("Update employee:", employee);
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigate("/employees");
          })
          .catch((error) => console.log(error));
      } else {
        // Add Employee
        const employee = { firstName, lastName, email };
        console.log("Add employee: ", employee);
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigate("/employees");
          })
          .catch((error) => console.log(error));
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorCopy = { ...error };

    if (firstName.trim()) {
      errorCopy.firstName = "";
    } else {
      errorCopy.firstName = "First Name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = "";
    } else {
      errorCopy.lastName = "Last Name is required";
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = "";
    } else {
      errorCopy.email = "Email is required";
      valid = false;
    }
    setErrors(errorCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h3 className="text-center">Update Employee</h3>;
    } else {
      return <h3 className="text-center">Add Employee</h3>;
    }
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="Enter Employee First Name"
                  name="firstName"
                  className={`form-control ${
                    error.firstName ? "is-invalid" : ""
                  }`}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {error.firstName && (
                  <div className="invalid-feedback">{error.firstName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Last Name"
                  name="lastName"
                  className={`form-control ${
                    error.lastName ? "is-invalid" : ""
                  }`}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {error.lastName && (
                  <div className="invalid-feedback">{error.lastName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="Enter Employee Email"
                  name="email"
                  className={`form-control ${error.email ? "is-invalid" : ""}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error.email && (
                  <div className="invalid-feedback">{error.email}</div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
