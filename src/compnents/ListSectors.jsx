import React, { useEffect, useState } from "react";
import { useAPI } from "../useAPI/useAPI";
import { Link } from "react-router-dom";
import Lists from "./comon/Lists";
function ListSectors() {
  const [users, setUsers] = useState([]);
  const { deleteUserInfo, getUserInfo } = useAPI();
  useEffect(() => {
    getUserInfo(setUsers);
  }, []);
  const deleteHandle = (id) => {
    deleteUserInfo(id);
  };
  const editHandle = (id) => {
    console.log("ID: ", id);
  };
  return (
    <div>
      <Lists
        users={users}
        deleteHandle={deleteHandle}
        editHandle={editHandle}
      />
    </div>
  );
}

export default ListSectors;
