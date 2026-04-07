import React from 'react'
import Hello from '../../components/hello';

const Home = () => {
  console.log("Checking the component rendering");
  return (
    <main>
      <div className="text-5xl underline bold">Welcome to Next.js!</div>
      <Hello /> 
    </main>
  )
}

export default Home