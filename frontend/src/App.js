import './App.css';
import SignIn from './Components/Login/login';
import Signup from './Components/Signup/signup';
import routing from './Utils/Routes';
import {useRoutes} from 'react-router-dom'

function App() {
  const route = useRoutes(routing)
  return (
    <>
      {route}
    </>
  );
}

export default App;
