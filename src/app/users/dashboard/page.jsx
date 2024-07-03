import AuthUserSession from '@/libs/auth-libs'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Page = async () => {
    const  user = await AuthUserSession()
  return (
    <div className='mt-8 text-color-primary flex flex-col justify-center items-center'>
        <h5 className='text-2xl font-bold '>Welcome, {user?.name}</h5>
        <Image src={user?.image}
        alt="..."
        width={200}
        height={100}
        />
        <div className='flex flex-wrap gap-4 py-8'>
          <Link className='bg-color-accent text-color-dark font-bold px-4 py-3 text-xl' href="/users/dashboard/collections">Collection</Link>
          <Link className='bg-color-accent text-color-dark font-bold px-4 py-3 text-xl' href="/users/dashboard/comment">Command</Link>
        </div>
    </div>
  )
}

export default Page