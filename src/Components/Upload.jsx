import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ENV_CONFIG } from "../config/env_config";
import { useAuth } from "../context/auth";

const Upload = () => {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const [auth] = useAuth();

  const API_ENDPOINT = ENV_CONFIG.BASE_URL;

  const handleUpload = async (event) => {
    event.preventDefault();

    try {
      const imageData = new FormData();

      imageData.append("image", image);

      const { data } = await axios.post(
        `${API_ENDPOINT}/api/v1/product/create-product`,
        imageData,
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data.success) {
        console.log("image added successfully", data.message);
      } else {
        console.error("Some error", data?.message);
      }
    } catch (err) {
      console.error("Some error", err?.message);
    }
  };

  return (
    <main className="mx-auto overflow-hidden max-w-screen-xl px-20 mt-10">
      <div className="flex justify-center items-center h-64  border-2 border-dashed">
        <input
          type="file"
          className="flex-col justify-center items-center  "
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <button
        onClick={handleUpload}
        className="w-full h-12 bg-blue-700 rounded-lg text-white mt-3 "
      >
        Upload
      </button>
    </main>
  );
};
export default Upload;
