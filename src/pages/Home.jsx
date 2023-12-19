import { Link } from "react-router-dom"

const Home = ()=>{

    return(

<>

 <h2 className="m-2 d-flex justify-content-center">home page</h2>

 <div className="container">

<div className="row">
    <div className="col-md-6 col-sm-12">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="src/images/nano-steam.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="src/images/nano keratin.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="src/images/inoar.jpg" className="d-block w-100" alt="..." />
    </div>
    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      </button>
      </div>
      </div>
    <div className="col">
    <p className="d-flex justify-content-center">
    Enim excepteur sunt ad proident labore amet fugiat minim pariatur ullamco. Pariatur fugiat quis nostrud id aliqua anim Lorem nulla nostrud nisi consectetur proident amet. Aliqua in mollit dolore ex aliqua duis deserunt Lorem in cillum. Eu et proident consequat pariatur laboris. Aliqua pariatur consequat ea ullamco. Deserunt eu culpa sunt excepteur qui deserunt id.
    
    Mollit officia incididunt nisi irure do minim nostrud cillum deserunt. Aliquip culpa non aliqua nulla nulla consequat labore dolore veniam aliqua enim. Et dolore elit laboris elit ut aliqua deserunt. Laborum ex culpa dolor quis veniam culpa ullamco velit ea enim ut magna aliquip eu. Laborum consequat ex occaecat mollit excepteur labore. Deserunt eiusmod commodo non nisi deserunt aute tempor irure eiusmod aliqua non.
    
    Reprehenderit officia laborum consequat sit laborum amet aute adipisicing. Nostrud eiusmod ex in sit adipisicing voluptate aliquip duis nisi occaecat fugiat sint duis sint. Consequat cillum consectetur aute est sunt voluptate elit nostrud qui.
    </p>
    </div>
    </div> 
    </div>
    <br></br>
    <Link to={"/Posts"} className="btn btn-dark text-danger  position-absolute  end-50 ">Posts</Link>
</>
    )
  }
  export default Home