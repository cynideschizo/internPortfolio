// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Box } from '@mui/material'
import './App.css'
import Bio from './components/Bio'
import BioDetails from './components/BioDetails'
import WhatIDo from './components/WhatIDo'
import FeaturedProjects from './components/FeaturedProjects'
import CodeSnippet from './components/CodeSnippet'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Box sx={{display:'flex',flexDirection:'column',gap:8}}>
      <Bio/>
      <BioDetails/>
      <WhatIDo/>
      <FeaturedProjects/>
      <CodeSnippet/>
    </Box>
  )
}

export default App
