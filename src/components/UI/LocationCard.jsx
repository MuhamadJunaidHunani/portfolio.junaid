import React from 'react'
import style from './style.module.css'

const LocationCard = ({icon , title , text}) => {
  return (
    <div className='flex gap-3 max-w-[270px]'>
        <div className={`${style.iconCardCont} p-[1px] w-[50px] h-[50px]`}>
            <div className='bg-[--lightBg] p-[5px] w-full h-full'>
                <div className='w-full h-full flex justify-center items-center text-[20px] text-[--darkBg] bg-[#01dbc2]'>
                    {icon}
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-1'>
            <p className='text-[#01dbc2] text-[17px] leading-[20px] mb-0'>{title}</p>
            <p className='text-white text-[15px] leading-[20px] m-0'>{text}</p>

        </div>
    </div>
  )
}

export default LocationCard