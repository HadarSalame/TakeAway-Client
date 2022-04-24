import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Provider } from 'react';
import Index from './Components/Index/IndexComponents'
import Header from './Components/Header/HeaderComponent'
import Login from './Components/Claint/Login/LoginComponent'
import SignUp from './Components/Claint/SignUp/SignUPComponent'
import ProfessionalLogin from './Components/Professional/ProfessionalLogin/ProfessionalLoginComponent'
import ProfessionalSignUp from './Components/Professional/ProfessionalSignUp/ProfessionalSignUpComponent'
import PAComponent from './Components/Claint/PrivateArea/PrivateAreaComponents'
import ForgetPass from './Components/ForgetPassWord/ForgetPassComponent'
import ProfessionalPA from './Components/Professional/ProfessionalPrivateArea/ProfessionalPAComponent'
import BusinessPage from './Components/Professional/Business/BusinessComponent';
// import Big_Bite from './Images/Logos'



function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      {/* <BrowserRouter>
  <Link to='/Login'>page1</Link>
  <Link to='/Page2'>page2</Link>

<Routes>
  <Route path='/Header' element={<Header/>}></Route>
</Routes>
  </BrowserRouter> */}
      {/* </Provider> */}


      {/* <Header />  */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PAComponent></PAComponent> */}
      {/* <ProfessionalLogin></ProfessionalLogin> */}
      {/* <ProfessionalSignUp />  */}
      {/* <ProfessionalPA/> */}
      <BusinessPage></BusinessPage>
{/* <img src={Big_Bite}></img> */}

      <br></br>
      <h6>כל הזכויות שמורות</h6>
    </div>
  );
}

export default App;
