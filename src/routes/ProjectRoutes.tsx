import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { Home } from "../pages/Home"
import { ScrollTop } from "../hooks/ScrollTop"

export const Route_Items = [
    { name: "Home", link: "/toDos", element: <Home /> },
]

export const Nav_Items = [
    { name: "Home", link: "/toDos" },
]

export const ProjectRoutes = () => {
    return (
        <div className="bg-white text-gray-900 dark:bg-gray-700 dark:text-gray-100">
            <BrowserRouter>
                <ProjectNavbar />

                <Routes>
                    {
                        Route_Items.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element} />
                            )
                        })
                    }
                </Routes>

                <ScrollTop col={"green"} />

            </BrowserRouter>
        </div>
    )
}