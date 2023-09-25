import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {SignIn} from './modules/ath/components/SignIn';
import {Register} from './modules/ath/components/Register';
import { RecoverPassword } from './modules/ath/components/RecoverPassword';
import { LockScreen } from './modules/ath/components/LockScreen';
import { ComfirmEmail } from './modules/ath/components/ComfirmEmail';

import "./assets/styles/_fonttype.scss"
import { Logout } from './modules/ath/components/Logout';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <SignIn></SignIn>
     <Register></Register>
     <ComfirmEmail></ComfirmEmail>
     <Logout></Logout>
     <RecoverPassword/> */}
     <LockScreen></LockScreen>
    </>
  )
}

export default App
