import { useNavigate } from 'react-router-dom';
import thankyouGif from '../assets/thankyou.gif';

export default function Thankyou() {
  const navigate = useNavigate()
  return (
    <>  
      <div className=" mt-10">
        <div className="bg-white p-6 md:mx-auto">
          <div className="flex items-center justify-center">
            <img src={thankyouGif} alt="Thank you GIF" className="h-52" />
          </div>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Form Submitted!</h3>
            <p className="text-gray-600 my-2">Thank you for filling out our form. We will reach out to you soon.</p>
            <p> Have a great day! </p>
            <div className="py-10 text-center">
              <button onClick={()=>navigate("/")} className="px-12 bg-black hover:bg-slate-900 duration-150 text-white font-semibold py-3">
                GO BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>         
  );
}
