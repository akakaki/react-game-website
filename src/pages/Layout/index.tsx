// import { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from '@/components/Header/index.tsx'
import Footer from '@/components/Footer/index.tsx'


const bg = new URL('@/assets/images/single_img_gpg202107.webp', import.meta.url).href

function ViewAside () {
  const list = [
    { id: 'news', label: '最新消息' },
    { id: 'home', label: '遊戲' },
    { id: 'giftpack', label: '商城' },
    { id: 'orderno', label: '序號' },
    { id: 'store', label: '門市據點' },
  ].map(item => {
    return (
      <li>
        <NavLink
          to="/"
          key={ item.id }
        >{ item.label }</NavLink>
      </li>
    )
  })

  return (
    <aside>
      <ul>
        { list }
      </ul>
    </aside>
  )
}

export default function Layout():JSX.Element {
  // const [count, setCount] = useState(0)
  // <button onClick={() => setCount((count) => count + 1)}>
  // count is {count}
  // </button>
  return (
    <>
      <div className="fixed -z-10 top-0 left-0 w-full h-full bg-black pointer-events-none">
        <img
          className="absolute top-0 left-0 w-full h-full filter grayscale opacity-10"
          src={ bg }
        />
      </div>
      <Header />
      <div className="container max-w-full w-[1200px] mx-auto p-[10px] box-border flex-1">
        <ViewAside />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}