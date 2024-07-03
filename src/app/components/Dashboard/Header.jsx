"use client"
import { ArrowCircleLeft } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import React from 'react'


const Header = ({title}) => {
    const router = useRouter()
    const handleBack = (event) => {
        event.preventDefault()
        router.back()
        
    }
  return (
    <div className='flex justify-between items-center'>     
    <button onClick={handleBack} className='text-color-primary'>
    <ArrowCircleLeft size={32} />
        </button>   
    <h3 className=' font-bold text-2xl text-color-primary'>{title}
</h3>
</div>
  )
}

export default Header