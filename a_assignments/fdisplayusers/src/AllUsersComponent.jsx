import React, { useState } from "react";
import { users as initialUsers } from "./users";
import SingleUserComponent from "./SingleUserComponent";

function AllUsersComponent() {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const addAllUsers = () => {
    setUsers(initialUsers);
    setShowUsers(true);
  };

  const deleteAllUsers = () => {
    setUsers([]);
    setShowUsers(false);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);

    // If all users are deleted individually
    if (updatedUsers.length === 0) {
      setShowUsers(false);
    }
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* Toggle Button */}
      {!showUsers ? (
        <button onClick={addAllUsers}>Add All Users</button>
      ) : (
        <button onClick={deleteAllUsers}>Delete All Users</button>
      )}

      {/* Conditional Rendering */}
      {showUsers && users.length > 0 && (
        <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <SingleUserComponent
                key={user.id}
                user={user}
                deleteUser={deleteUser}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AllUsersComponent;