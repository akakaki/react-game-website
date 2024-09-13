// import { useState } from 'react'
import Header from '@/components/Header/index.tsx'
import Footer from '@/components/Footer/index.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  // <button onClick={() => setCount((count) => count + 1)}>
  // count is {count}
  // </button>
  return (
    <>
      <Header />
      <div className="container max-w-full w-[1200px] mx-auto p-[10px] box-border flex-1">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
