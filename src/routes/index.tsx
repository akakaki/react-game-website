import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@/pages/Home/index.tsx'
import Sign from '@/pages/Sign/index.tsx'
import Game from '@/pages/Game/index.tsx'
import Member from '@/pages/Member/index.tsx'
import Error from '@/pages/Error/index.tsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    handle: { title: '首頁' }
  }, {
    path: '/sign',
    element: <Sign />,
    handle: { title: '註冊' }
  }, {
    path: '/game',
    element: <Game />,
    handle: { title: '遊戲' }
  }, {
    path: '/member',
    element: <Member />,
    handle: { title: '會員' }
  }, {
    path: '*',
    element: <Error />,
    handle: { title: 'Oops!' }
  }
])

function Router () {
  return (
    <RouterProvider router={ routes } />
  )
}

export default Router