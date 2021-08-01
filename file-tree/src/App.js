import React, { useState } from 'react'
import Folder from './components/Folder'
import './style.css'
import File from './components/File'



function App() {
  return (
  <div className="folder-container">
    <Folder name = 'Desktop' isOpen={false}>
    <Folder name = 'Music'>
      <File name = 'emma_jalamo.mp4'/>
      <File name = 'express_file.mp4'/>
    </Folder>
      <File name = 'dogs.jpeg'/>
      <File name = 'cats.png'/>
    </Folder>
    <Folder name = 'Applications' />
    <Folder name = 'Winstone' />
    

  </div>
  );
}


export default App;
