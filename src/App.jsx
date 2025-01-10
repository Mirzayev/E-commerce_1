import './App.css'
import SignUp from "./pages/SignUp.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Contact from "./pages/Contact.jsx";

function App() {


    const route = createBrowserRouter(
        [
            {
                path: "/",
                element: <HomePage/>,
                children: [
                    {
                        index: true,
                        element: <HomePage/>
                    },
                    {
                        path: "/contact",
                        element: <Contact/>
                    }
                ]
            },
            {
                path: "/signUp",
                element: <SignUp/>
            }
        ]
    )

    return (
        <div className="App ">
            <RouterProvider router={route}/>
        </div>
    )
}

export default App
