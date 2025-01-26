import { auth } from '@/auth'
import Navbar from '@/components/Home/Navbar'
import Body from '@/components/PostJob/Body';
import React from 'react'

const page = async () => {
    const session = await auth();
  return (
    <div>
        <Navbar session={session} />
        <Body />
    </div>
  )
}

export default page