import { createBrowserRouter, RouterProvider, redirect, RouteObject } from 'react-router-dom'

// import App from '@/App.tsx'
import Layout from '@/pages/Layout/index.tsx'
import Home from '@/pages/Home/index.tsx'
import Sign from '@/pages/Sign/index.tsx'
import Game from '@/pages/Game/index.tsx'
import Member from '@/pages/Member/index.tsx'
import MemberInfo from '@/pages/Member/Info/index.tsx'
import Error from '@/pages/Error/index.tsx'

const isLogin = true

function beforeRoute (params: { title: string, path: string, isLogin?: boolean | undefined }) {
  const title = import.meta.env.VITE_APP_TITLE
  document.title = params?.title ? `${ title } - ${ params.title }` : title

  if (params.isLogin && !localStorage.getItem('token')) return redirect('/sign')
  else if (localStorage.getItem('token') && params?.path === 'sign') return redirect('/')

  return true
}

type Routes = RouteObject & {
  handle?: { title: number, isLogin: boolean } | undefined
}

const routes: Array<Routes> = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: { title: '首頁' },
      }, {
        path: '/sign',
        element: <Sign />,
        handle: { title: '註冊' },
      }, {
        path: '/game',
        element: <Game />,
        handle: { title: '遊戲' },
      }, {
        path: '/member',
        element: <Member />,
        handle: { title: '會員中心', isLogin },
        children: [
          {
            path: 'info',
            element: <MemberInfo />,
            handle: { title: '會員資訊' },
          },{
            path: '*',
            element: <Error />,
            handle: { title: 'Oops!' },
          }
        ],
      }, {
        path: '*',
        element: <Error />,
        handle: { title: 'Oops!' },
      }
    ],
  }
].map((item: Routes) => {
  if (item.children) for (const sub of item.children) sub.loader = () => beforeRoute({ ...sub.handle, path: sub.path })
  else item.loader = () => beforeRoute({ ...item.handle, path: item.path })
  return item
})

const router = createBrowserRouter(routes)

function Router () {
  return (
    <RouterProvider router = { router } />
  )
}

export default Router