import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./components/pages/Home"
import RootLayout from "./components/RootLayout"
import Products from "./components/pages/Products"
import ErorPage from "./components/pages/ErorPage"
import ProductDetails from "./components/pages/ProductDetails"
let router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route element={<RootLayout></RootLayout>}>
    <Route index element={<Home></Home>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path="/products/:id" element={<ProductDetails></ProductDetails>}></Route>
  </Route>
  <Route>
    <Route path="*" element={<ErorPage></ErorPage>}></Route>
  </Route>
  </>
))


function App() {
 

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
