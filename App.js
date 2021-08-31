import React from 'react'
import FetchUsers from './FetchUsers'
import './App.css'

const App = () => {
  return (
    <div className="maincontainer">
      <div>
      <h1 className="text-center bg-gray-900 text-white text-4xl pt-5 lg:text-6xl">
        Random User Application
      </h1>
      <div>
      <FetchUsers />
      </div>
      </div>
    </div>
  )
}

export default App
