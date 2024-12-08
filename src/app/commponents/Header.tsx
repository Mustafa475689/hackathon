import React from 'react'
import Image from 'next/image'

import Navbar from './Navbar'

// import image 
import header from "../images/header2.jpg"
import plate from "../images/Image.png"


const Header = () => {
  return (
    <>
    <div>
      <Navbar />

<Image src={plate} alt={header} width={480} height={200} className='mt-[248px] ml-[565px] absolute' />
<div>
<Image src={header} alt={header} Width={1920} Height={950} className='' />
</div>
    
    </div>
</>
  )
}

export default Header
