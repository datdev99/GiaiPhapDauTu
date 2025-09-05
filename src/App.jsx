import { useState } from 'react'
// import TechHomepage from './pages/homepage/TechHomepage'
import './App.css'
import './global.css'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()

  return (
    <>
      {routeElements}
    </>
  )
}

export default App
