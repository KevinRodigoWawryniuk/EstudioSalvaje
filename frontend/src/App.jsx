import './App.css'
import { Routes, Route } from 'react-router';
import { Homes, Logins } from './pages/pages';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homes />} />
        <Route path='/login' element={<Logins />} />

      </Routes>
    </>
  )
}
export default App
