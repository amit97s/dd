// import React from 'react';
// import Slider from 'react-slick';
// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';
// import Data from './Data';

// function Carousel() {
//     var settings = {
//         dots: true,
//         infinite: true,

//         // autoplay: true,
//         speed: 2000,
//         // autoplaySpeed: 4000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       };
//   return (
//     <div className='w-56 m-auto ' >
//         <div className='mt-20'style={{borderRadius:"20px"}}>
//         <Slider {...settings}>
//             {Data.map((item) => (
//                 <div className='bg-white h-[1200px] '>
//                     < div className='rounded-t-xl image '>
//                         <img src={item.img} alt='' className='object-cover' />
//                     </div>
//                 </div>
//             ))}
//             </Slider>
//         </div>
//         </div>
//   )
// }

// export default Carousel