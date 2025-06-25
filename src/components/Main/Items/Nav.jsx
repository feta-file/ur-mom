import React from 'react'
import { assets } from '@/assets/assets'

const Nav = () => {
    return (
        <div className='flex items-center justify-between text-2xl text-gray-500 p-5 font-outfit'>
            <p>UrMom AI</p>
            <img className='rounded-3xl w-10' src={assets.user_icon} alt='' />
        </div>
    )
}

export default Nav