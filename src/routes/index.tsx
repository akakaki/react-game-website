import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '@/App.tsx'
import Home from '@/pages/Home/index.tsx'
import Sign from '@/pages/Sign/index.tsx'
import Game from '@/pages/Game/index.tsx'
import Member from '@/pages/Member/index.tsx'
import MemberInfo from '@/pages/Member/Info/index.tsx'
import Error from '@/pages/Error/index.tsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
        children: [
          {
            path: 'info',
            element: <MemberInfo />,
            handle: { title: '會員資訊' }
          }, {
            path: '*',
            element: <Error />,
            handle: { title: 'Oops!' }
          }
        ],
        handle: { title: '會員中心' }
      }, {
        path: '*',
        element: <Error />,
        handle: { title: 'Oops!' }
      }
    ]
  }
])

function Router () {
  return (
    <RouterProvider router={ routes } />
  )
}

export default Router