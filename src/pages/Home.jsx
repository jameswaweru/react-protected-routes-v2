import React, { useContext } from 'react'
import { RootContext } from './Root'

function Home() {
  const [user , logoutUser] = useContext(RootContext)
  return (
    <div>
      <p className=' mt-28'>Home {user.name}</p>
    </div>
  )
}

export default Home