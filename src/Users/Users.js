import React, { useState, useEffect } from "react";
import Axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

function UsersListing() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    Axios.get(API)
      .then((response) => {
        if (response && response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log("ERR: FETCHING TODO FAILED, err"));
  }, []);
  function updateState(user = {}) {
    let usersCopy = [...users];
    usersCopy.push(user);
    setUsers(usersCopy);
  }
  function saveData() {
    Axios.post(API, {
      name: "Prathesh Manickkam",
      username: "Bret",
      email: "PratheshManickkam@yahoo.com",
    })
      .then((result) => updateState(result.data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <ul>
        {users &&
          users.map((d, i) => <li key={`users-list-${i}`}>{d.name}</li>)}
      </ul>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}
export default UsersListing;
