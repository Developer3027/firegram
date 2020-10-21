import React, { useState } from 'react'
import UploadForm from './components/form/UploadForm'
import ImageGrid from './components/imageGrid/ImageGrid'
import Modal from './components/modal/modal'
import Title from './components/title/Title'

function App () {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default App
