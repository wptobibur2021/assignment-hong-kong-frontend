import axios from "axios";
import { useNotification } from "../notification/useNotification";
import { useNavigate } from "react-router-dom";
export const useAPI = () => {
  const navigate = useNavigate();
  const { successNotify, errorNotify } = useNotification();
  // Below Base URL
  const baseURL = "http://localhost:8000/";
  // Get User Information
  const getUserInfo = (setUsers) => {
    try {
      axios.get(`${baseURL}api/all-user`).then((res) => {
        setUsers(res.data.data);
      });
    } catch (err) {
      errorNotify(err);
    }
  };
  //   Get Category Information
  const getCategory = (setSelector) => {
    axios
      .get("http://localhost:8000/api/category")
      .then((res) => setSelector(res.data.data));
  };
  // Add User Information
  const addUserInfo = (data) => {
    try {
      axios.post(`${baseURL}api/add-user`, data).then((res) => {
        if (res.status === 200) {
          successNotify("User information Add successfull");
          navigate("/all");
        }
      });
    } catch (err) {
      errorNotify(err);
    }
  };
  // Delete User Information

  const deleteUserInfo = (id) => {
    try {
      axios.delete(`${baseURL}api/delete-user/${id}`).then((res) => {
        if (res.data.data.deletedCount === 1) {
          successNotify("User information delete successfull");
          navigate("/");
        }
      });
    } catch (err) {
      errorNotify(err);
    }
  };

  return { addUserInfo, deleteUserInfo, getUserInfo, getCategory };
};
