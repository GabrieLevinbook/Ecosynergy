import { useState } from 'react'
import "./404.css"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
function Forbbiden () {
  const svgString = `<?xml version="1.0" encoding="UTF-8"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512px" height="512px" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g><path style="opacity:0.924" fill="#000000" d="M 429.5,-0.5 C 432.167,-0.5 434.833,-0.5 437.5,-0.5C 439.27,1.11327 440.436,3.11327 441,5.5C 444.075,27.0964 446.075,48.7631 447,70.5C 435.953,92.0943 424.787,113.594 413.5,135C 421.758,150.421 429.258,166.255 436,182.5C 438.499,191.151 439.332,199.818 438.5,208.5C 456.179,209.001 473.846,209.834 491.5,211C 495.333,211.5 497.5,213.667 498,217.5C 499.201,246.547 500.701,275.547 502.5,304.5C 500.756,311.122 496.756,313.288 490.5,311C 489.299,310.097 488.465,308.931 488,307.5C 486.635,280.125 484.968,252.792 483,225.5C 466.907,224.004 450.741,223.171 434.5,223C 428.898,232.93 421.565,241.264 412.5,248C 423.538,263.904 434.705,279.737 446,295.5C 447.03,297.588 447.863,299.755 448.5,302C 437.077,327.68 425.244,353.18 413,378.5C 408.965,383.364 404.632,383.698 400,379.5C 398.286,376.55 398.286,373.55 400,370.5C 411.106,347.955 421.939,325.288 432.5,302.5C 420.855,285.531 408.855,268.864 396.5,252.5C 371.218,256.775 351.718,248.108 338,226.5C 330.983,211.136 323.983,195.803 317,180.5C 302.416,189.542 287.916,198.708 273.5,208C 275.592,231.609 277.592,255.275 279.5,279C 278.135,286.013 274.135,288.346 267.5,286C 266.107,284.829 265.273,283.329 265,281.5C 262.289,254.213 260.622,226.879 260,199.5C 260.308,198.692 260.808,198.025 261.5,197.5C 279.417,186.625 297.25,175.625 315,164.5C 316.042,150.254 321.542,138.087 331.5,128C 301.367,116.902 288.2,95.4023 292,63.5C 301.577,32.2875 322.744,18.1208 355.5,21C 383.904,27.7988 398.904,45.7988 400.5,75C 400.252,90.4262 394.585,103.426 383.5,114C 390.391,116.112 396.724,119.279 402.5,123.5C 413.088,103.991 423.422,84.3245 433.5,64.5C 430.95,45.5484 428.616,26.5484 426.5,7.5C 426.4,4.37636 427.4,1.70969 429.5,-0.5 Z M 340.5,34.5 C 371.447,35.6126 386.281,51.6126 385,82.5C 378.125,106.362 362.292,116.862 337.5,114C 313.218,106.28 303.051,89.7796 307,64.5C 312.358,47.9201 323.524,37.9201 340.5,34.5 Z M 367.5,126.5 C 380.552,126.777 391.386,131.777 400,141.5C 408.47,157.441 416.137,173.774 423,190.5C 426.611,213.782 417.444,229.616 395.5,238C 375.428,241.878 360.262,235.045 350,217.5C 344,204.167 338,190.833 332,177.5C 327.55,149.045 339.383,132.045 367.5,126.5 Z"/></g>
  <g><path style="opacity:0.923" fill="#000000" d="M 195.5,511.5 C 192.833,511.5 190.167,511.5 187.5,511.5C 185.336,508.524 183.836,505.191 183,501.5C 175.86,476.58 169.026,451.58 162.5,426.5C 162.549,422.896 164.216,420.396 167.5,419C 178.167,413.667 188.833,408.333 199.5,403C 193.547,371.332 188.714,339.498 185,307.5C 185.374,306.584 185.874,305.75 186.5,305C 196.324,300.255 205.99,295.255 215.5,290C 210.468,245.549 205.468,201.049 200.5,156.5C 200.182,155.353 199.516,154.519 198.5,154C 136.454,145.946 74.4539,137.612 12.5,129C 8.95024,125.269 8.61691,121.269 11.5,117C 13.5336,115.994 15.7002,115.494 18,115.5C 82.1922,123.813 146.359,132.313 210.5,141C 212.049,142.214 213.215,143.714 214,145.5C 219.537,195.166 225.037,244.832 230.5,294.5C 229.95,297.773 228.283,300.273 225.5,302C 216.487,306.171 207.82,310.838 199.5,316C 205.262,347.401 210.095,378.901 214,410.5C 213.07,412.552 211.57,414.052 209.5,415C 198.815,420.007 188.481,425.507 178.5,431.5C 185.154,454.45 191.654,477.45 198,500.5C 199.188,504.741 198.355,508.408 195.5,511.5 Z"/></g>
  </svg>
  
`;
  return (
    <>
    <div style={{display:"flex"}}>
    <div id='conerrorIV' style={{ width:"50vw",height:"100vh",  display:"flex",flexDirection:"column", alignItems:"center",textAlign:"center", justifyContent:"center"}}>
    <p id='IV' style={{ width:"300px", fontSize:"60px"}}>Erro 403 Forbidden</p>
    <div style={{justifyContent:"center", alignItems:"center", justifyContent:"center", display:"flex", flexDirection:"column"}}><p id='IVerror' style={{fontSize:"40px", width:"550px"}}> Voce entrou em uma rota que na qual voce nao possui acesso, clique no botao abaixo para ser redirecionado a pagina principal</p>
    <Link to={"/"}><button style={{marginTop:"40px",width:"150px", height:"50px", borderRadius:"10px", fontSize:"20px"}}id='IVvoltar'>clique aqui</button></Link></div>



    </div>
    <div style={{width:"50vw", backgroundColor:"#14B57A", height:"100vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
    <div dangerouslySetInnerHTML={{ __html: svgString }} />

    </div>
    </div>
    </>
  )
}

export default Forbbiden
