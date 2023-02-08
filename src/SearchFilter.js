import React, { useState, useEffect } from "react";
import axios from "axios";

export const SearchFilter = () => {
  const [myData, setMyData] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
    setMyData(res.data);
    setSearchApiData(res.data);
  };

  const handleFilter = (e) => {
    debugger;
    console.log(e);
    if (e.target.value === "") {
      setMyData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) => {
        return (
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.phone.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      if (filterResult > 0){
        setMyData(filterResult);
      }
      else{
        setMyData([{
            name:"nodata",
            username:"nodata",
            email:"nodata",
            phone:"nodata",
            

      }])
      }
    }

    setFilterValue(e.target.Value);
  };

  return (
    <>
      <div>
        <div>
          <input
            type="search"
            placeholder="Search"
            value={filterValue}
            onChange={(e) => handleFilter(e)}
          />
        </div>
        <table>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Contact no</th>
          {myData.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default SearchFilter;
