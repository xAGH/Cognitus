import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Users = () => {
  const url = "https://randomuser.me/api/";
  const [users, setUsers] = useState([]);
  const [usersQuantity, setUsersQuantity] = useState(1);
  const [add, setAdd] = useState(1);
  const [del, setDel] = useState(1);

  const { isDarkMode } = useContext(ThemeContext);

  const onAdd = () => {
    setAdd(usersQuantity + 1);
    setUsersQuantity(usersQuantity + 1);
  };

  const onDelete = () => {
    if (users.length > 0) {
      setDel(usersQuantity - 1);
      setUsersQuantity(usersQuantity - 1);
    }
  };

  useEffect(() => {
    fetch(url + `?results=${usersQuantity}`)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.results);
      });

    return () => {
      setUsers([]);
    };
  }, [add, del]);

  useEffect(() => {
    console.log("Mount Users");
    console.log(isDarkMode);
    return () => {
      console.log("Unmount Users");
    };
  }, []);

  return (
    <>
      <table className={{}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.email}>
                <td>{user.name.first + " " + user.name.last}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button style={{ backgroundColor: "green" }} onClick={onAdd}>
        Add user
      </button>
      <button style={{ backgroundColor: "red" }} onClick={onDelete}>
        Delete user
      </button>
    </>
  );
};

export default Users;
