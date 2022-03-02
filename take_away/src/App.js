import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/HeaderComponent'



function App() {
  return (
    <div className="App">
       {/* <Header /> */}
      {/* <Login /> */}
      <SignUp />
      <ProfessionalLogin></ProfessionalLogin>
      <ProfessionalSignUp />

      {/* <Footer/> */}
    </div>
  );
}

export default App;
