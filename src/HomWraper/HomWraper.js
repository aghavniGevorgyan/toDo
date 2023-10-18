import React from 'react'
import { Outlet } from 'react-router'

function HomWraper() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default HomWraper