import React from 'react'
import list from '../../public/list.json';
import Cards from './Cards';
import { Link } from 'react-router-dom';
function Course() {
  console.log(list)
  return (
  <>
  <div className='max-w-screen-2xl mx-auto md:px-20 px-4 dark:bg-slate-900 text-white'> 
    <div className='mt-20 items-center justify-center text-center ' >
      <h1 className='text-2xl  md:text-4xl text-black dark:text-white'>We have delighted to have you <span className='text-pink-500'>here!</span></h1>
    <p className='mt-12'>Perched on an inclination, sloping steeply from town's main road, is a cosy and warm second home in Landour—the updated and repurposed avatar of a 150-year-old, British-era mission house. Rejuvenated as it is, the home’s wonderful cosiness, birthed from a tasteful deployment of art, textiles, decorative lights and wood, echoes its vintage past mellifluously.</p>
<Link to="/">
<button type="submit"  className='bg-pink-500 text-white hover:bg-pink-700 duration-300 rounded-lg px-4 py-1 mt-2'>Back</button>

</Link>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-4  '>
      {
        list.map((item)=>(
          <Cards item={item} key={item.id} />
        ))
      }
    </div>
    </div>
    </>
  )
}

export default Course