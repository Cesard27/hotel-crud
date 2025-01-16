import { Navigate, Route, Routes } from 'react-router'
import { FormScreen } from '../screens/FormScreen'
import { ResumeScreen } from '../screens/ResumeScreen'

export const AppRouter = () => {
   return (
      <>
         <Routes>
            <Route path='/Form' element={<FormScreen/>}/>
            <Route path='/resume' element={<ResumeScreen/>}/>

            <Route path='/*' element={<Navigate to='/Form'/>}/>
         </Routes>
      </>
   )
}
