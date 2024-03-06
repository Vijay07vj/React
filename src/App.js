import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { Suspense, lazy, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

//Chunking
//Code Splitting
// Dynamic Bundling
//Lazy Loading
//On Demand Loading
//Dynamic Import
//Suspense

const Grocery = lazy(() => import("./components/Grocery"));

// Normal CSS, Sass & Sess, chakaraUI, bootstrap, MaterialUI , Ant Design , Today Trending- TailWind CSS

const AppLayout = () => {
  //Authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    //Make API call and send username and password
    const data = {
      name: "Vijay",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      {/* Default Value */}
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
