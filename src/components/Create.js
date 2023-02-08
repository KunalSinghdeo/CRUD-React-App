import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const header = { "Access-Control-Allow-Origin": "*" };
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    axios.post("https://63e3111e619fce55d412a3a1.mockapi.io/crudyoutube", {
      name: name,
      email: email,
      header,
    });
    history("/read");
  };

  return (
    <>
      <h2> Create</h2>
      <form>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
