import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/HeaderComponent'
import Footer from './Components/Footer/FooterComponent'
import Login from './Components/Claint/Login/LoginComponent'
import SignUp from './Components/Claint/SignUp/SignUPComponent'
import ProfessionalLogin from './Components/Professional/ProfessionalLogin/ProfessionalLoginComponent'
import ProfessionalSignUp from './Components/Professional/ProfessionalSignUp/ProfessionalSignUpComponent'


function App() {
  return (
    <div className="App">

       <Header />
      <Login />
      {/* <SignUp />
      <ProfessionalLogin></ProfessionalLogin>
      <ProfessionalSignUp /> */}

      {/* <Footer/> */}
    </div>
  );
}

export default App;
