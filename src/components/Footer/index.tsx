function Footer () {
  return (
    <>
      <footer>
        <div className='footer__container max-w-full w-[1200px] p-[10px] box-border mx-auto flex items-center justify-center'>
          <div className='text-[12px]'>Copyright © { new Date().getFullYear() }</div>
        </div>
      </footer>
    </>
  )
}

export default Footer