import React, { useEffect } from 'react'
import RNInstagramImage, { Counter } from 'rn-instagram-image'

const App = () => {
  useEffect(() => {
    console.log(RNInstagramImage)
  })

  return <Counter />
}

export default App
