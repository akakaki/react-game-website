import { Link, NavLink } from 'react-router-dom'

function ViewTipsMenu () {
  const list = [
    { id: 'sign', label: '登入' }
  ].map(item => {
    return (
      <NavLink
        to={ item.id }
        key={ item.id }
      >{ item.label }</NavLink>
    )
  })

  return (
    <div className='header-tip__container flex ml-auto'>
      { list }
    </div>
  )
}

function ViewMenu () {
  const menuList = [
    { id: 'home', label: '首頁' },
    { id: 'game', label: '遊戲' },
    { id: 'member', label: '會員中心' }
  ].map(item => {
    return (<NavLink
      to={ item.id }
      key={ item.id }
    >{ item.label }</NavLink>)
  })

  return (<div className='flex gap-10px'>{ menuList }</div>)
}

function Header () {
  return (
    <>
      <header className='border-bottom border-bottom-1px'>
        <div className='header__container max-w-full w-[1200px] p-[10px] box-border mx-auto flex items-center'>
          <Link to='/' className='w-[30px]'>
            <img src='/logo.svg' title='logo'/>
          </Link>
          <div className='header__menu flex flex-col flex-1'>
            <ViewTipsMenu />
            <ViewMenu />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header