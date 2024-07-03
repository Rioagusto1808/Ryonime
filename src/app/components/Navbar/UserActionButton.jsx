import AuthUserSession from '@/libs/auth-libs'
import Link from 'next/link'
import React from 'react'

 const UserActionButton = async() => {
    const user = await AuthUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin"
  return (
    <div className='flex gap-2 justify-between'>
        {
            user ?         <Link className='py-1' href="/users/dashboard">Dashboard</Link> : null
        }

        <Link className='bg-color-dark text-color-accent py-1 px-12 inline-block' href={actionUrl}>{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton