import { Outlet } from 'react-router-dom'

function Member () {
  const list = [
    { id: '', label: '會員資訊' }
  ].map(item => {
    return (
      <div>{ item.label }</div>
    )
  })

  return (
    <>
      <div className="member__container flex gap-[10px]">
        <div className="member-aside__container">
          { list }
        </div>
        <div className="member-view__container">
          <Outlet />
        </div>

      </div>
    </>
  )
}

export default Member