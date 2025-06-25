import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Context from './context/Context'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Main />
      <Context />
    </div>
  )
}

export default App