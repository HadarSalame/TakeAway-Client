import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './Redux/Store/store'

// components
import Index from './Components/Index/IndexComponents'
import Header from './Components/Header/HeaderComponent'
import Login from './Components/Claint/Login/LoginComponent'
import SignUp from './Components/Claint/SignUp/SignUPComponent'
import ProfessionalLogin from './Components/Professional/ProfessionalLogin/ProfessionalLoginComponent'
import ProfessionalSignUp from './Components/Professional/ProfessionalSignUp/ProfessionalSignUpComponent'
import PAComponent from './Components/Claint/PrivateArea/PrivateAreaComponents'
import BusinessPage from './Components/Professional/Business/BusinessComponent';
import InfoPage from './Components/Infromation/InfoPageComponent';
import PPAComponent from './Components/Professional/ProfessionalPrivateArea/ProfessionalPAComponent';
import Menu from './Components/Menu/MenuComponent';
import ShowOrder from './Components/ShowOrder/ShowOrderComponent';
import Disposable from './Components/Disposable/DisposableComponent';
import Waitresses from './Components/Waitresses/WaitressesComponent';
import Order from './Components/Order/OrderComponent';


//לא לשכוח למחוקק
// import tryPage from './Components/Actions/ActionsComp';



import ForgetPass from './Components/ForgetPassWord/ForgetPassComponent';
import  NoLogin  from './Components/NoLogin/NoLoginComponent';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
     

      <Header />
      {/* <Index/> */} 
      {/* <App /> */}
      <Routes>
        <Route path='/' element={<App />} ></Route>
        <Route path='/Header' element={<Header />}></Route>
        <Route path='/Index' element={<Index />}></Route>
        <Route path='/ProfessionalLogin' element={<ProfessionalLogin />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/ProfessionalSignUp' element={<ProfessionalSignUp />}></Route>
        <Route path='/PAComponent' element={<PAComponent />}></Route>
        <Route path='/PPAComponent' element={<PPAComponent />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/NoLogin' element={<NoLogin />}></Route>
        <Route path='/Disposable' element={<Disposable />}></Route>
        <Route path='/Waitresses' element={<Waitresses />}></Route>
        <Route path='/Order' element={<Order/>}></Route>


        <Route path='/BusinessPage' element={<BusinessPage />}></Route>
        <Route path='/Infopage' element={<InfoPage />}></Route>
        <Route path='/ShowOrder' element={<ShowOrder />}></Route>


        {/* למחוקקקקקק */}
        <Route path='/tryPage' element={<tryPage />} />

        <Route path='/ForgetPass' element={<ForgetPass />} />
      </Routes>



      <i></i>
      <h6 style={{ textAlign: 'center',margin:'3%' }}>כל הזכויות שמורות</h6>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
