import React, { Suspense } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
const DashboardComponent = React.lazy(()=> import('../Components/Dashboard/Dashboard'))
const AboutComponent = React.lazy(()=> import('../Components/About/About'))
const HomeComponent = React.lazy(()=> import('../Components/Home/Home'))

function Page() {
  return <div>
     <Navbar/>
      <Suspense fallback={<Loading/>}>

      <Routes>
        <Route path='/' element={<HomeComponent/>} />
      <Route path='/dashboard' element={<DashboardComponent/>}/>
      <Route path='/about' element={<AboutComponent/>}/>
      </Routes>
      </Suspense>
  </div>;
}

export default Page;
