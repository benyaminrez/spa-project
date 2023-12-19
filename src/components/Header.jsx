import { NavLink } from "react-router-dom"


const Header = ()=>{

return(

  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-danger" >weben.io</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to={"/"} className={(e)=>e.isActive ? "nav-link active" :"nav-link"} aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/posts"} aria-current="page" className="nav-link">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/About'} className="nav-link" >about</NavLink>
        </li>
      </ul>
      <span className="navbar-text text-success">
      Welcome to my page     
       </span>
    </div>
  </div>
</nav>
)
}
export default Header