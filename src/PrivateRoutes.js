import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {

  return (
    localStorage.getItem('userId') ? <Outlet/> : <Navigate to='/login'/>
  )
}
export default PrivateRoutes;