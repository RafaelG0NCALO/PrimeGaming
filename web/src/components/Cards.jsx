import React from 'react'

const Cards = ({props}) => {
  return (
    <div className='min-w-[215px] max-sm:min-w-[155px] max-w-[348px] mb-[18px] max-md:min-h-[220px]  min-h-[289px] bg-[#071936] rounded-md overflow-hidden'>
       <div className='w-full min-h-[143px] overflow-hidden'>
        <img src={props.img} alt="" className='w-full h-full object-cover hover:scale-105 transition-all' />
       </div>

    <div className='flex items-start justify-center flex-col max-md:p-3 p-6 pt-2  h-[146px] max-md:h-14'>
        <div>
          <h1 className='text-white font-bold max-md:text-sm text-base max-md:h-0 h-[77px] flex items-center'>
          {props.title}
          </h1>
        </div>
        <button 
        className='text-white text-sm min-h-[38px] max-md:mb-2 max-md:mt-10 font-medium px-3 py-[3px] rounded-md flex items-center justify-center bg-[#9146FF]'>
          Resgatar jogo
        </button>
       </div>
    </div>
  )
}

export default Cards