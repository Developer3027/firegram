import React from 'react'
import UploadForm from './components/form/UploadForm'
import ImageGrid from './components/imageGrid/ImageGrid'
import Title from './components/title/Title'

function App () {
  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default App
