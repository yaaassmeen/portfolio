// import React from 'react'
// import './testimonials.css'
// import nitrr from '../../assets/nitrr.jpeg'
// import boards from '../../assets/boards.png'
// import { Navigation, Pagination } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


// function Testimonials() {
//   return (
//     <section id='testimonials'>
//       <h5>Academics and Qualification</h5>
//       <h2>Education</h2>

//       <Swiper className="container testimonial__container"
//       modules={[Navigation, Pagination]}
//       spaceBetween={40}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//      >
       
//               <SwiperSlide key={1} className='testimonial'>
//                 <div className="client__avatar">
//                   <img src={nitrr} alt="  NITRR" />
//                 </div>
//                 <h5 className='client__name'>BTech Specialization: IT</h5>
//                 <small className='client__review'>NIT Raipur 2025</small>
//                 <small className='client__name'>CPI: 8.49(till current SEM)</small>
//               </SwiperSlide>
//               <SwiperSlide key={2} className='testimonial'>
//                 <div className="client__avatar">
//                   <img src={boards} alt="12TH Boards" />
//                 </div>
//                 <h5 className='client__name'>AISSCE(12th Boards)</h5>
//                 <small className='client__review'>Krishna Public School</small>
//                 <small className='client__name'>91.80%</small>
//               </SwiperSlide>
//               <SwiperSlide key={3} className='testimonial'>
//                 <div className="client__avatar">
//                   <img src={boards} alt="10TH Boards" />
//                 </div>
//                 <h5 className='client__name'>AISSE(10th Boards)</h5>
//                 <small className='client__review'>Kendriya Vidyalaya Kusmunda</small>
//                 <small className='client__name'>85.20%</small>
//               </SwiperSlide>
        
        
//       </Swiper>
    
//     </section>
//   )
// }

// export default Testimonials
import React from 'react'
import './educations.css'
import nitrr from '../../assets/nitrr.jpeg'
import boards from '../../assets/boards.png'
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Educations() {
  return (
    <section id='educations'>
      <h5>Academics and Qualification</h5>
      <h2>Education</h2>

      <Swiper className="container education__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide key={1} className='education'>
          <div className="education__avatar">
            <img src={nitrr} alt="NITRR" />
          </div>
          <h5 className='education__name'>BTech Specialization: IT</h5>
          <small className='education__review'>NIT Raipur 2025</small>
          <small className='education__name'>CPI: 8.49 (till current SEM)</small>
        </SwiperSlide>
        <SwiperSlide key={2} className='education'>
          <div className="education__avatar">
            <img src={boards} alt="12TH Boards" />
          </div>
          <h5 className='education__name'>AISSCE (12th Boards)</h5>
          <small className='education__review'>Krishna Public School</small>
          <small className='education__name'>91.80%</small>
        </SwiperSlide>
        <SwiperSlide key={3} className='education'>
          <div className="education__avatar">
            <img src={boards} alt="10TH Boards" />
          </div>
          <h5 className='education__name'>AISSE (10th Boards)</h5>
          <small className='education__review'>Kendriya Vidyalaya Kusmunda</small>
          <small className='education__name'>85.20%</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Educations
