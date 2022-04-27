import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



// components
import Index from './Components/Index/IndexComponents'
import Header from './Components/Header/HeaderComponent'
import Login from './Components/Claint/Login/LoginComponent'
import SignUp from './Components/Claint/SignUp/SignUPComponent'
import ProfessionalLogin from './Components/Professional/ProfessionalLogin/ProfessionalLoginComponent'
import ProfessionalSignUp from './Components/Professional/ProfessionalSignUp/ProfessionalSignUpComponent'
import PAComponent from './Components/Claint/PrivateArea/PrivateAreaComponents'
import BusinessPage from './Components/Professional/Business/BusinessComponent';



import ForgetPass from './Components/ForgetPassWord/ForgetPassComponent';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
         <Header />
      <Routes>
        <Route path='/Header' element={<Header />}></Route>
        <Route path='/Index' element={<Index />}></Route>
        <Route path='/ProfessionalLogin' element={<ProfessionalLogin />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/ProfessionalSignUp' element={<ProfessionalSignUp />}></Route>
        <Route path='/PAComponent' element={<PAComponent />}></Route>
        <Route path='/BusinessPage' element={<BusinessPage />}></Route>



        <Route path='/ForgetPass' element={<ForgetPass />} />
      </Routes>



     
      <h6 style={{ textAlign: 'center' }}>כל הזכויות שמורות</h6>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
