import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import{BrowserRouter,Link,Route,Routes} from 'react-router-dom'
import { Provider } from 'react';
import Index from './Components/Index/IndexComponents'
import Header from './Components/Header/HeaderComponent'
import Login from './Components/Claint/Login/LoginComponent'
import SignUp from './Components/Claint/SignUp/SignUPComponent'
import ProfessionalLogin from './Components/Professional/ProfessionalLogin/ProfessionalLoginComponent'
import ProfessionalSignUp from './Components/Professional/ProfessionalSignUp/ProfessionalSignUpComponent'
import PAComponent from './Components/PrivateArea/PrivateAreaComponents'
import ForgetPass from './Components/ForgetPassWord/ForgetPassComponent'


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
      <ProfessionalLogin></ProfessionalLogin>
      {/* <ProfessionalSignUp />  */}


      <br></br>
      <h4>כל הזכויות שמורות</h4>
    </div>
  );
} 

export default App;
