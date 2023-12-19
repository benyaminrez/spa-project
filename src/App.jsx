import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import IndexPost from "./pages/posts/Index"
import ShowPost from "./pages/posts/Show"
import About from "./pages/About"

function App() {


  return (
<>

<BrowserRouter>

<Header />


<Routes>

<Route exact path="/" element={<Home />} />



<Route exact path="/posts" element={<IndexPost />} />

<Route path="/posts/:id" element={<ShowPost />} />

<Route path="*" element={<NotFound />} />
<Route path="/About" element={<About />} />




</Routes>
</BrowserRouter>
</>
  )
}

export default App
