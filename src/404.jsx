import { useState } from 'react'
import "./404.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
function Notfound() {
  const svgString = `<svg width="500px" height="400px" viewBox="0 0 64 64" id="forest-burn" xmlns="http://www.w3.org/2000/svg"><title>forest-burn</title><circle cx="23.5" cy="23.5" r="22.5" style="fill:#ffded5"/><path d="M39,30.5A1.5,1.5,0,0,0,37.5,32v4.351A3.153,3.153,0,0,1,34.351,39.5H31V35H25V58h6V42.5h3.351A6.155,6.155,0,0,0,40.5,36.351V32A1.5,1.5,0,0,0,39,30.5Z" style="fill:#bf7e68;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M45,21a6,6,0,0,0-4.911-5.9A16.409,16.409,0,0,0,29,11c-.133,0-.262.014-.395.017A7.491,7.491,0,0,0,16,16.5c0,.247.014.49.037.731A11.042,11.042,0,0,0,14.082,22.2,5.5,5.5,0,0,0,17.5,32c.168,0,.333-.01.5-.025A16.436,16.436,0,0,0,29,36c7.922,0,14.394-5.121,14.946-11.606A5.968,5.968,0,0,0,45,21Z" style="fill:#a9ba5a;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M32.21,32.4A18.892,18.892,0,0,0,37,33c6.075,0,11-2.686,11-6,0-2.6-3.048-4.815-7.3-5.644a4.983,4.983,0,0,0-9.582.579C28.046,23,26,24.867,26,27a4.032,4.032,0,0,0,1.264,2.8" style="fill:#a9ba5a;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M28.763,16.876c-1.976,2.526-6.09,2.61-9.186.187S15.572,10.627,17.549,8.1a5.164,5.164,0,0,1,3.463-1.9,2.9,2.9,0,0,0,1.832-.9,2.192,2.192,0,0,0,.324-2.557s2.207-1.6,3.413,1.719a3.121,3.121,0,0,1,.075-.321,4.155,4.155,0,0,1,6.562-2.1l1.19.931s-4.059-.3-3.426,2.554C32.766,13.584,28.763,16.876,28.763,16.876Z" style="fill:#e66353;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M20.4,9.2a3.36,3.36,0,0,0-.473.565,3.575,3.575,0,0,0,1.222,4.574,3.731,3.731,0,0,0,4.9-.107c1.334-1.145,2.916-4.286,1.688-8.312,0,0-.848,3.183-3.424,2.137C22.561,7.342,21.042,8.555,20.4,9.2Z" style="fill:#ffce56"/><path d="M42.762,23.478a3.633,3.633,0,0,0-.513.615c-.933,1.471-.376,3.637,1.328,4.97a4.055,4.055,0,0,0,5.324-.116c1.45-1.245,3.169-4.658,1.834-9.033,0,0-.921,3.459-3.72,2.322C45.109,21.463,43.459,22.782,42.762,23.478Z" style="fill:#fc8c29;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><path d="M43.762,5.478a3.633,3.633,0,0,0-.513.615c-.933,1.471-.376,3.637,1.328,4.97a4.055,4.055,0,0,0,5.324-.116c1.45-1.245,3.169-4.658,1.834-9.033,0,0-.921,3.459-3.72,2.322C46.109,3.463,44.459,4.782,43.762,5.478Z" style="fill:#fc8c29"/><circle cx="58.74" cy="1.987" r="1.069" style="fill:#4c241d"/><circle cx="4.74" cy="31.987" r="1.069" style="fill:#4c241d"/><circle cx="11.74" cy="13.987" r="1.069" style="fill:#4c241d"/><circle cx="56.74" cy="25.987" r="1.069" style="fill:#4c241d"/><circle cx="55.74" cy="9.987" r="1.069" style="fill:#4c241d"/><path d="M49.125,55.353C45.643,52.486,50.858,49,50.858,49H48.529a6.4,6.4,0,0,0-5.971,8.78,4.95,4.95,0,0,0,.214.461c-2.031-1.269-3.391-1.2-4.279-.722a30.618,30.618,0,0,0-2.368-2.166C32.643,52.486,37.858,49,37.858,49H35.529a6.4,6.4,0,0,0-5.971,8.78,4.95,4.95,0,0,0,.214.461c-2.55-1.594-4.041-1.075-4.868-.291a30.065,30.065,0,0,0-2.779-2.6C18.643,52.486,23.858,49,23.858,49H21.529a6.4,6.4,0,0,0-5.971,8.78,4.95,4.95,0,0,0,.214.461C11.151,55.353,10,59.4,10,59.4a3.375,3.375,0,0,1,2.035,3.41c0,.067-.025.129-.032.194H55.548A24.54,24.54,0,0,0,49.125,55.353Z" style="fill:#e66353;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><line x1="5" y1="63" x2="12" y2="63" style="fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/><line x1="55" y1="63" x2="62" y2="63" style="fill:none;stroke:#4c241d;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px"/></svg>
`;
  return (
    <>
    <div style={{display:"flex"}}>
    <div id='conerrorIV' style={{ width:"50vw",height:"100vh",  display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center", justifyContent:"center"}}>
    <p id='IV' style={{fontSize:"70px"}}>Erro 404 Not Found</p>
    <div style={{justifyContent:"center", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"}}><p id='IVerror' style={{fontSize:"50px", width:"550px"}}> Voce entrou em uma rota que nao existe, clique no botao abaixo para ser redirecionado a pagina principal</p>
    <Link to={"/"}><button style={{marginTop:"40px",width:"150px", height:"50px", borderRadius:"10px", fontSize:"20px"}}id='IVvoltar'>clique aqui</button></Link></div>



    </div>
    <div style={{width:"50vw", backgroundColor:"#14B57A", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div dangerouslySetInnerHTML={{ __html: svgString }} />

    </div>
    </div>
    </>
  )
}

export default Notfound
