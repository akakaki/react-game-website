// import { useState } from 'react'
import Header from '@/components/Header/index.tsx'
import Footer from '@/components/Footer/index.tsx'
import Router from '@/routes/index.tsx'

function App() {
  // const [count, setCount] = useState(0)
{/* <button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button> */}

  return (
    <>
      <Header />
      <div className="container flex-1">
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default App
