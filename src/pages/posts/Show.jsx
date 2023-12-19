import { useLocation, useParams, useSearchParams } from "react-router-dom"
import IndexPost from "./Index"
const ShowPost = ()=>{
const {id}= useParams()
const query = new URLSearchParams(useLocation().search);
return(
        <>
<h1>post number : {id}</h1>
<h2>{query.get('name')}</h2>

</>)
}
export default ShowPost