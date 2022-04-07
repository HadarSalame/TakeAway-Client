import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/HeaderComponent'
import Login from './Components/Claint/Login/LoginComponent'
import SignUp from './Components/Claint/SignUp/SignUPComponent'
import ProfessionalLogin from './Components/Professional/ProfessionalLogin/ProfessionalLoginComponent'
import ProfessionalSignUp from './Components/Professional/ProfessionalSignUp/ProfessionalSignUpComponent'
import PAComponent from './Components/PrivateArea/PrivateAreaComponents'


function App() {
  return (
    <div className="App">
       <Header />
      <Login />
      {/* <SignUp /> */}
      <PAComponent></PAComponent>
      {/* <ProfessionalLogin></ProfessionalLogin> */}
      {/* <ProfessionalSignUp />  */}
      
    </div>
  );
} 

export default App;
