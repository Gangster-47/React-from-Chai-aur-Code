import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <>
      <h1 className='text-center text-xl bg-green-400 px-4 py-4'>User: {userid} </h1>
    </>
  )
}

export default User