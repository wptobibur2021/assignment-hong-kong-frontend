import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAPI } from "../useAPI/useAPI";
import { Link } from "react-router-dom";
import AddLists from "./comon/AddLists";
const AddSectors = () => {
  const { addUserInfo, getCategory } = useAPI();
  const { register, handleSubmit } = useForm();
  const [selectors, setSelector] = useState([]);
  const onSubmit = (data) => {
    addUserInfo(data);
  };
  useEffect(() => {
    getCategory(setSelector);
  }, []);
  return (
    <div>
      <h2 className=" my-10">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h2>
      <AddLists
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        selectors={selectors}
      />
    </div>
  );
};

export default AddSectors;
