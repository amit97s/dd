import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ENV_CONFIG } from '../../config/env_config';
import { useAuth } from "../../context/auth";
import { NavLink } from 'react-router-dom';
import { TbCloudUpload } from 'react-icons/tb';
import { IoImage } from 'react-icons/io5';
import Loader from '../../Components/Loader';

function ImagePreview() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [auth] = useAuth();

  const fetchImages = async () => {
    try {
      const response = await axios.get(`${ENV_CONFIG.BASE_URL}/image/get-images`, {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });
      setImages(response.data.images);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to fetch images');
      setLoading(false);
    }
  };

  const handleDeleteImage = async (deletedId) => {
    try {
      if (window.confirm('Are you sure you want to delete this image?')) {
        const { data } = await axios.delete(`${ENV_CONFIG.BASE_URL}/image/delete-image/${deletedId}`, {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        });
        if (data.success) {
          setImages((prevImages) => prevImages.filter(image => image._id !== deletedId));
        }
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      setError('Failed to delete image');
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <div className="min-h-screen mx-auto overflow-hidden max-w-screen-xl font-custom flex   flex-col sm:flex-row ">
        <ul className="w-96">
          <li>
            <NavLink
              to={"/dashboard/admin"}
              className={({ isActive }) => (
                isActive
                  ? "flex items-center gap-2 border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"
                  : "flex items-center gap-2 border-s-[3px] border-gray-500 bg-gray-50 px-4 py-3 text-gray-500"
              )}
            >
              <TbCloudUpload />
              <span className="text-sm font-medium"> Upload </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/dashboard/admin"}
              className={({ isActive }) => (
                isActive
                  ? "flex items-center gap-2 border-s-[3px] border-blue-500 bg-blue-50 px-4 py-3 text-blue-700"
                  : "flex items-center gap-2 border-s-[3px] border-gray-500 bg-gray-50 px-4 py-3 text-gray-500"
              )}
            >
              <IoImage />
              <span className="text-sm font-medium"> View Images </span>
            </NavLink>
          </li>
        </ul>
        <div className='w-full'>
          <h1 className='text-center font-extrabold text-2xl'>Image Gallery</h1>
          {loading ? (
            <div className='flex items-center justify-center '>
              <Loader />
            </div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : images.length === 0 ? (
            <div>No images found</div>
          ) : (
            <div className='m-auto flex flex-wrap justify-center gap-y-1 max-w-screen-lg'>
              {images.map((image) => (
                <div key={image._id} className='w-[20rem]  ml-1 hover:opacity-85 m-5'>
                  <img src={image.imageData} alt={`Image ${image._id}`} className='w-full h-[213px] object-cover' style={{ objectFit: "cover" }} />
                  <button onClick={() => handleDeleteImage(image._id)} className='bg-black hover:bg-slate-900 text-white duration-150 w-full py-1.5 mt-1 rounded-lg'>Delete</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
