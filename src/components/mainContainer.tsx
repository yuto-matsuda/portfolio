export default function MainContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <div className='min-h-screen bg-white pt-16'> for using a header
    <div className='min-h-screen bg-white'>
      {children}
    </div>
  )
}