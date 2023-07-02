import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>}>
        <Route path="AddCreator" element={<AddCreator/>}/>
        <Route path="EditCreator/:id" element={<EditCreator/>}/>
        <Route path="ShowCreators" element={<ShowCreators/>}/>
        <Route path="ViewCreator/:id" element={<ViewCreator/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
