import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
function Freebook() {
    const filterdata = list.filter((data)=>data.category ==="free");
console.log(filterdata)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4 dark:bg-slate-900 text-white'>
       <div>
       <h1 className='font-bold text-xl pb-2'>Free Offerd Book</h1>
       <p>Systematic, comprehensive, investigation and exploration of natural, causes and effect</p>
       </div>
   
    <div>
    <Slider {...settings}>
       {
        filterdata.map((item)=>(
           <Cards item={item} key={item.id}/>
        ))
       }
      </Slider>
    </div>
    </div>
    </>
    
  )
}

export default Freebook