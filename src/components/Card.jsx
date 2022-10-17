import { useEffect, useState } from 'react';
import axios from 'axios';
function Card()
{
const [details,setDetails]=useState({});

  const fetchDetails=async ()=>{
    const {data}=await axios.get("https://official-joke-api.appspot.com/random_joke");
    // console.log(data.setup);
    setDetails(data);
  }

  useEffect(() => {
    fetchDetails();
  }, []);
    return(
        <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",margin:"auto"}}>
            <div className="" style={{width: "18rem",border:"None",height:"28rem"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7I2RbNLMDgYGUS007oCzcvOPXqiy3D1fmPw&usqp=CAU" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{details.setup}</h5>
                <p className="card-text m-3">{details.punchline}</p>
                <a href="#" className="btn btn-primary" onClick={()=>fetchDetails()}>New one</a>
            </div>
            </div>
        </div>
    );
}

export default Card;