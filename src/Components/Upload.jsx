import React, { useState } from "react";
import axios from "axios";
import { ENV_CONFIG } from "../config/env_config";
import { useAuth } from "../context/auth";
import toast from 'react-hot-toast'
import Loader from "./Loader";

const Upload = () => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [auth] = useAuth();

  const API_ENDPOINT = ENV_CONFIG.BASE_URL;

  const handleUpload = async (event) => {
    event.preventDefault();

    if(!image) return;

    try {
      const imageData = new FormData();
      imageData.append("image", image);

      setLoading(true); 

      const { data } = await axios.post(
        `${API_ENDPOINT}/image/upload`,
        imageData,
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoading(false); 

      if (data.success) {
        toast.success("Image uploaded successfully");
        setLoading(false)
        
      } else {
        console.error("Some error", data?.message);
        
      }
    } catch (err) {
      toast.error(err?.response?.data?.message)

    }
  };

  return (
    <main className="mx-auto overflow-hidden max-w-screen-xl px-20 mt-10">
      
     <div>
     <div className="flex justify-center items-center h-64  border-2 border-dashed">
        <input
          type="file"
          className="flex-col justify-center items-center  "
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <button
        onClick={handleUpload}
        className="w-full flex h-12 bg-blue-700 rounded-lg text-white mt-3 items-center justify-center gap-2"
      >
        <p className={`${loading ? 'hidden' : 'block'}`}>Upload</p> {loading? <>  <p>Uploading...</p> <Loader /></>  : ""}
      </button>

    
     </div>
     
    </main>
  );
};
export default Upload;
