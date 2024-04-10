import React, { useState } from 'react'

const Upload = () => {

  const [images,setImages] = useState()
  console.log(images);
  return (
    <div className='flex flex-col items-center'>
        <div className='w-full h-96 border border-spacing-2 flex justify-center items-center'>
          <div className='w-44 h-44 border border-dashed flex justify-center items-center' >
          <input type="file" onChange={(event)=>setImages(event.target.files[0])}  className='file-choose'/>
          </div>
        </div>
        <button className='bg-blue-600 p-3 mt-5 rounded-md w-full text-white'>Upload Image</button>
    </div>
  )
} 
export default Upload