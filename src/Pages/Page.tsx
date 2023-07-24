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

      <Routes>
        <Route path='/' element={<React.Suspense fallback={<div>loading..</div>}><HomeComponent/></React.Suspense>} />
      <Route path='/dashboard' element={<React.Suspense fallback={ <div>loading..</div>}><DashboardComponent/></React.Suspense>}/>
      <Route path='/about' element={<React.Suspense fallback={ <div>loading..</div>}><AboutComponent/></React.Suspense>}/>
      </Routes>
  </div>;
}

export default Page;
