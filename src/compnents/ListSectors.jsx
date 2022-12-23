import React, { useEffect, useState } from "react";
import { useAPI } from "../useAPI/useAPI";
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
  return (
    <div>
      <Lists users={users} deleteHandle={deleteHandle} />
    </div>
  );
}

export default ListSectors;
