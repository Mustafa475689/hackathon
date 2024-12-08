import React from 'react'
import Image from 'next/image';

// Import Iamges 
import foodtuck from "../images/Foodtuck.png";
import search from "../images/Group.png";
import cart from "../images/Handbag.png";


const Navbar = () => {
  return (
    <nav className='w-[1320px] h-[87px] mt-[45px] bg-transparent absolute'>
      <div className='ml-[605px]'>
        <Image src={foodtuck} alt="foodtuck" width={109} height={32} />
      </div>

      <div className='flex'>

        <div className='mt-12 ml-[180px]'>
          <ul className='flex justify-between gap-4 text-base text-white font-normal cursor-pointer'>
            <li>Home</li>
            <li>Menu</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='border-[1px] border-[#FF9F0D] w-[310px] h-[54px] rounded-[27px] mt-8 ml-36 flex justify-evenly'>
          <input type="text" placeholder='Search...'
            className='bg-transparent text-white text-base outline-none placeholder-white font-normal' />
          <Image src={search} alt='search' className='w-6 h-6 mt-4 cursor-pointer' />
        </div>
        <div className='mt-[46px] ml-2'>
          <Image src={cart} alt='handbag' className='w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
