import axios from "axios";
import { ENV_CONFIG } from "../../config/env_config";
import { useAuth } from "../../context/auth";

function ImageItem({ image, onDelete }) {

    const [auth] = useAuth()

  if (!image) {
    return null; // Return null if the image object is undefined
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${ENV_CONFIG.BASE_URL}/image/delete-image/${image._id}`,{
        headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
      });

      if(response.data.success){
          onDelete(image._id);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div>
      {image.image && image.image.contentType && image.image.data ? (
      <>
       <img src={image.imageData} alt={`Image ${image._id}`} />
        <button onClick={handleDelete}>Delete</button>
      </>
      ) : (
        <div>Image data not available</div>
      )}
     
         
    </div>
  );
}

export default ImageItem;
