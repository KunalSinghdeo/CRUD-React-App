import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      "https://63e3111e619fce55d412a3a1.mockapi.io/crudyoutube"
    );
    setMyData(res.data);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://63e3111e619fce55d412a3a1.mockapi.io/crudyoutube/${id}`)
      .then(() => {
        getData();
      });
  };

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <h2>Read</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {myData.map((item) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td scope="col">
                    <Link to="/update">
                      <button
                        onClick={() =>
                          setToLocalStorage(item.id, item.name, item.email)
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td scope="col">
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
