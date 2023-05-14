import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom'
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




function App() {
  return (
    <div className="App">
      <Index/>
      {/* <Provider store={store}> */}
{/* 
        <Link to='/Login'>page1</Link>
        <Link to='/Page2'>page2</Link> */}

 
       
      {/* </Provider> */}
 
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <PAComponent></PAComponent> */}
      {/* <ProfessionalLogin></ProfessionalLogin> */}
      {/* <ProfessionalSignUp />  */}
      {/* <ProfessionalPA/> */}
      {/* <BusinessPage></BusinessPage> */}
      {/* <img src={Big_Bite}></img> */}
      

      <br></br>
    
    </div>
  );
}

export default App;
