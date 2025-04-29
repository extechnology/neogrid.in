import { lazy, Suspense, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import LoadingSpinner from "./Components/LoadingSpinner";
import { Toaster } from "sonner";



// Lazy Loading pages
const MainLayout = lazy(() => import("./Components/Layout/MainLayout"))
const ProjectGallery = lazy(()=>import("./Pages/ProjectGallrey"))
const Landing = lazy(() => import("./Pages/Landing"))
const Contact = lazy(() => import("./Pages/Contact"))
const PageNot = lazy(() => import("./Pages/PageNot"))
const Installation = lazy(() => import("./Pages/Installation"))
const Consultation = lazy(() => import("./Pages/Consultation"))
const Filter = lazy(() => import("./Pages/Filter"))
const SolarPannel = lazy(() => import("./Pages/SolarPannel"))
const GridInterActive = lazy(() => import("./Pages/GridInterActive"))
const SolarPcu = lazy(() => import("./Pages/SolarPcu"))
const Mppt = lazy(() => import("./Pages/Mppt"))
const SolarBatteries = lazy(() => import("./Pages/SolarBatteries"))
const Privacy = lazy(() => import("./Pages/Privacy"))
const RefundPolicy = lazy(() => import("./Pages/RefundPolicy"))
const Terms = lazy(() => import("./Pages/Terms"))
const WhatsApp = lazy(() => import("./Components/WhatsApp"))





function App() {


  useEffect(() => {


    AOS.init()

  }, []);




  return (

    <>


      <Suspense fallback={<LoadingSpinner />}>

        <Routes>


          {/* Main Layout */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<Landing />}></Route>

            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/projectgallery" element={<ProjectGallery />}></Route>

            <Route path="/installation" element={<Installation />}></Route>

            <Route path="/consultation" element={<Consultation />}></Route>

            <Route path="/filter" element={< Filter />}></Route>

            <Route path="/solarpannel" element={< SolarPannel />}></Route>

            <Route path="/gridinteractive" element={<GridInterActive />}></Route>

            <Route path="/solarpcu" element={<SolarPcu />}></Route>

            <Route path="/mppt" element={<Mppt />}></Route>

            <Route path="/solarbatteries" element={<SolarBatteries />}></Route>

            <Route path="/privacypolicy" element={<Privacy />}></Route>

            <Route path="/termscondition" element={<Terms />}></Route>

            <Route path="/refundpolicy" element={<RefundPolicy />}></Route>

            <Route path="*" element={< PageNot />}></Route>

          </Route>


        </Routes>

      </Suspense>


      {/* WhatsApp Logo */}
      <div className='Whats-app'>

        <WhatsApp />

      </div>


      <Toaster richColors position="bottom-center" />

    </>



  )



}

export default App
