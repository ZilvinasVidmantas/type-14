import React from 'react'
import Button from './button'

const Main = () => {
  return (
    <main>
      <Button variant="outlined" color="primary">outlined-primary</Button>
      <Button variant="outlined" color="secondary">outlined-secondary</Button>
      <Button variant="outlined" color="white">outlined-white</Button>
      <Button variant="contained" color="primary">contained-primary</Button>
      <Button variant="contained" color="secondary">contained-secondary</Button>
      <Button variant="contained" color="white">contained-white</Button>
    </main>
  )
}

export default Main