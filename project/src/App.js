
import { Header } from './Components/Header';
import Menu from './Components/Menu'
import { Footer } from './Components/Footer';
import { useReducer } from 'react';
import { init } from './Utils/init';
import { appReducer } from './reducers/appReducer'; 
import { appCtx } from './Context/context';
import Login from './RoutesFolder/Login'
function App() {
  const [state,dispatch]=useReducer(appReducer,init)
  return <div>
    <appCtx.Provider value={{state,dispatch}}>
   <Header/>
   {state.isLogedIn? <Menu/>:<Login/>}
    <Footer/>
    </appCtx.Provider>
    </div>
}

export default App;
