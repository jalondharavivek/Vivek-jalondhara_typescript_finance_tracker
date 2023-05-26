import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewtransaction from './pages/Transaction/viewtra';
import Transactionadd from './pages/Transaction/addtransaction';
import Mainfinance from './pages/Transaction/MainTransaction';
import Edittransaction from './pages/Transaction/edit';
import Login from './pages/userauth/Component/Login';
import Register from './pages/userauth/Component/Register';
import Authguard from './pages/userauth/authguard';
function App() {
  return (
 

     <BrowserRouter>
          <Routes>
          <Route path="/register" element={<Authguard public={true} cmp={<Register />}/>} />
          <Route path="/login" element={<Authguard public={true} cmp={<Login />}/>} />
            
            {/* <Route path="/" element={<Authenticationlogin />}> */}
            {/* <Route path="/" element={<Mainfinance />} /> */}
            {/* </Route>  */}
           <Route path="/" element={<Authguard public={false} cmp={<Mainfinance />}/>} />
           <Route path="/addtransaction" element={<Authguard public={false} cmp={<Transactionadd />}/>} />
           <Route path="/transaction/view/:id" element={<Authguard public={false} cmp={<Viewtransaction />}/>} />
           <Route path="/transaction/edit/:id" element={<Authguard public={false} cmp={<Edittransaction />}/>} />
          

            {/* <Route path="/alltransaction" element={<Alltransaction />} >
          <Route path=":id" element={<Alltransaction />} />  */}
            {/* </Route>
          <Route path="/View" element={<View />} />
        </Route> */}
          </Routes>
     
 {/* <Routes>
 <Route path="/login" element = {< Login />} />
 <Route path="/register" element = {< Register />} />
 <Route path="/" element = {< Mainfinance />} />
 <Route path="/addtransaction" element={<Transactionadd />} />
 <Route path="/transaction/view/:id" element={<Viewtransaction />} />
 <Route path="/transaction/edit/:id" element={<Edittransaction />} />
 </Routes> */}
 </BrowserRouter>
   
    
  );
}

export default App;
