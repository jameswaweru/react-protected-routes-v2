import router from './Router';
import { RouterProvider, useOutletContext } from 'react-router-dom';
import './App.css'

function App() {

  const context = useOutletContext();

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
