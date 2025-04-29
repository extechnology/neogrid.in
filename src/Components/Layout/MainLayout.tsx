import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"


export default function MainLayout() {


    return (


        <main className="flex min-h-screen flex-col w-full">

            <header>

                <Header />

            </header>


            <Outlet />


            <footer>

                <Footer />

            </footer>


        </main>


    )



}
