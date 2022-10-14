import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./layout/pages/Home";
import "./app.css"
import Nomatch from "./layout/pages/Nomatch";
import Navbar from "./layout/Navbar";
import Layout from "./layout/Layout";
import Galleri from "./layout/pages/Galleri";
import Rumfaergen from "./layout/pages/Rumfaergen";
import Kontankt from "./layout/pages/Kontankt";
import Ture from "./layout/pages/Ture";
import Sikkerhed from "./layout/pages/Sikkerhed";
import AdminLayout from "./layout/admin/AdminLayout";
import AdminHeader from "./layout/admin/AdminHeader";
import AdminFooter from "./layout/admin/AdminFooter";
import AdminNavbar from "./layout/admin/AdminNavbar";
import AdminHome from "./layout/pages/admin/AdminHome";
import AdminTours from "./layout/admin/AdminTours";
import AdminToursCreate from "./layout/admin/AdminToursCreate";
import AdminToursPut from "./layout/admin/AdminToursPut";
import Login from "./layout/pages/Login";
function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="rumfaergen" element={<Rumfaergen/>}/>
          <Route path="ture" element={<Ture/>}/>
          <Route path="galleri" element={<Galleri/>}/>
          <Route path="sikkerhed" element={<Sikkerhed/>}/>
          <Route path="kontakt" element={<Kontankt/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="*" element={<Nomatch/>}/>
        </Route>

        {/* admin */}

        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AdminHome/>}/>
          <Route path="tours" element={<AdminTours/>}/>
          <Route path="admintourscreate" element={<AdminToursCreate/>}/>
          <Route path="admintoursput/:id" element={<AdminToursPut/>}/>
          <Route path="*" element={<Nomatch/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
