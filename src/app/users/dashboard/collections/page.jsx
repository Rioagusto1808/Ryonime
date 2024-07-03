import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowCircleLeft } from '@phosphor-icons/react/dist/ssr'
import Header from '@/app/components/Dashboard/Header'
ArrowCircleLeft

const Page = () => {
  return (
    <section className='mt-4 w-full'>
        <Header title={"My Collections"}/>
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        
        <Link className="relative border-2 border-color-accent" href="/">
        <Image src="" alt="" width={250}height={250} className='w-full'/>
        <div className='flex justify-center items-center absolute bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-xl text-center'>Judul Anime</h5>
        </div>
        </Link>  
        <Link className="relative border-2 border-color-accent" href="/">
        <Image src="" alt="" width={250}height={250} className='w-full'/>
        <div className='flex justify-center items-center absolute bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-xl text-center'>Judul Anime</h5>
        </div>
        </Link>  
        <Link className="relative border-2 border-color-accent" href="/">
        <Image src="" alt="" width={250}height={250} className='w-full'/>
        <div className='flex justify-center items-center absolute bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-xl text-center'>Judul Anime</h5>
        </div>
        </Link>  
        <Link className="relative border-2 border-color-accent" href="/">
        <Image src="" alt="" width={250}height={250} className='w-full'/>
        <div className='flex justify-center items-center absolute bottom-0 w-full bg-color-accent h-16'>
            <h5 className='text-xl text-center'>Judul Anime</h5>
        </div>
        </Link>  
        </div>
    </section>
  )
  
}

export default Page