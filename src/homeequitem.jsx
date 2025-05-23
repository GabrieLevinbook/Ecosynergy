import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { Input } from "./input";
import { Button } from "./button";
import { Link } from "react-router-dom";
import InputPer from "./inputper";
import { paises } from './paises';
import "./mdequipevisao1.css"
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from "./navbarlateral";
import "./404.css"
import Navbar2 from "./navbarlateral2";
import { Navbar4 } from "./Navbar4";
import { Navbar3 } from "./navbar3";
import "./mdequipevisão.css"
import axios from "axios";
export function HomeTem(props){
    let navigate=useNavigate()
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    useEffect(()=>{
      console.log(Cookies.get().Nome)
  
      if(!Cookies.get().NomeEqui2){
        console.log(Cookies.get().Nome)
        navigate("/equipevisao")
      }
    },[])
    
    const [imageperfil, setImageperfil] = useState(null);
    const [text ,settext] =useState("normal")
    const [nacionalidade, setNacionalidade] = useState(0)
    const [genero, setGenero] = useState(0)
    const [atividade, setAtividade] = useState("")
    const [NomeEqui,SetNomeEqui]=useState(Cookies.get().NomeEqui2)
    const [handleEqui, SethandleEqui]=useState(Cookies.get().NomeEqui2?Cookies.get().NomeEqui2.toLowerCase():"")
    const [Setor,SetSetor] = useState()
    const [Func,SetFunc] = useState()
    const [fusohorario, SetfusoHorario] = useState()
    const headers = {
      headers: {
          "Authorization": `Bearer ${Cookies.get().Token}`
      }
  };
  const atividades = {
    "Agriculture": "Agricultura",
    "Basic Chemical Production": "Produção de Produtos Químicos Básicos",
    "Beverage Production": "Produção de Bebidas",
    "Chemical Production": "Produção Química",
    "Circuit Assembly": "Montagem de Circuitos",
    "Crop Cultivation": "Cultivo de Culturas",
    "Dairy Production": "Produção de Laticínios",
    "Device Manufacturing": "Fabricação de Dispositivos",
    "Drug Manufacturing": "Fabricação de Medicamentos",
    "Dyeing": "Tingimento",
    "Elastomer Production": "Produção de Elastômeros",
    "Fertilizer Manufacturing": "Fabricação de Fertilizantes",
    "Finishing": "Acabamento",
    "Food Processing": "Processamento de Alimentos",
    "Heat Treatment": "Tratamento Térmico",
    "Industrial Gas Production": "Produção de Gases Industriais",
    "Livestock Farming": "Pecuária",
    "Marine Engineering": "Engenharia Naval",
    "Metal Casting": "Fundição de Metais",
    "Metal Mining": "Mineração de Metais",
    "Ore Processing": "Processamento de Minérios",
    "Packaging": "Embalagem",
    "Painting and Finishing": "Pintura e Acabamento",
    "Parts Manufacturing": "Fabricação de Peças",
    "Plastic Production": "Produção de Plásticos",
    "Quality Control": "Controle de Qualidade",
    "Quality Testing": "Teste de Qualidade",
    "Ship Repair": "Reparação de Navios",
    "Shipbuilding": "Construção Naval",
    "Steel Production": "Produção de Aço",
    "Steel Rolling": "Laminação de Aço",
    "Vehicle Assembly": "Montagem de Veículos",
    "Weaving": "Tecelagem"
  };
  const setores = {
    "Food": "Alimentício",
    "Basic": "Básico",
    "Petrochemical": "Petroquímico",
    "Electroelectronic": "Eletroeletrônico",
    "Agricultural": "Agrícola",
    "Pharmaceutical": "Farmacêutico",
    "Textile": "Têxtil",
    "Steel": "Siderúrgico",
    "Naval": "Naval",
    "Metallurgical": "Metalúrgico",
    "Automotive": "Automotivo"
  };
  
    axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/activity/v1`,headers).then((res)=>console.log(res))
    axios.get(`http://ec2-44-220-83-117.compute-1.amazonaws.com/api/team/v1/user/${Cookies.get().ID}`, headers)
    .then((res)=>{
      console.log(res)
      settext(res.data[0].description)
      setAtividade(atividades[res.data[0].activity.name])
      SetSetor(setores[res.data[0].activity.sector])
      SetFunc(res.data[0].members.length)
      SetfusoHorario(res.data[0].timeZone)
    })
    function handleCon(e){
    if(genero && nacionalidade){
    Cookies.set("nacionalidade",nacionalidade)
    Cookies.set("genero",genero)
    console.log(Cookies.get().NomeEqui && Cookies.get().nacionalidade && Cookies.get().genero )
    console.log(Cookies.get().nacionalidade)
    }
    else{

    }
}
function handlePular(e){
    console.log(Cookies.get().genero)
    Cookies.set("nacionalidade","indefinido")
    Cookies.set("genero","indefinido")
    console.log(Cookies.get().genero)

    }
  
    function handleGenero(event) {
      console.log(event.target.value)
      setGenero(event.target.value)
    }
    function handleEnviar(){
        console.log("casemiro")
        navigate("/equipe4")

    }
    function handleEnviar2(){
      console.log("casemiro")
      navigate("/entrarequipe")

  }
    function handleChangeNacionalidade(event) {
        console.log(event.target.value)
        setNacionalidade(event.target.value)
      }
    const handleImageChange = (e) => {
    Cookies.set("NomeEqui",)

        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageperfil(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    console.log(Cookies.get())
    return(
        <>
        <Navbar3></Navbar3>
        <div id="mdequihomecon">
           <Navbar4></Navbar4>
           <div id="mdEquiVis2Conger" style={{display:"flex", flexDirection:"row", backgroundColor:"#f5ebe0",  textAlign:"center"}}>
            <div style={{display:"flex", justifyContent:"left"}}>
            <div id="mdconEquiVIS2" style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column", }}>
              <div id="mdcondiv1EquiVIS2" style={{display:"flex",justifyContent:"left"}}>
                <p id="mdconP1EquiVIS2" style={{fontWeight:"bold"}}>
              Visão Geral da Equipe</p>
              <span id="Gap200px"></span>
              </div>
              <div style={{justifyContent:"left"}}>
      <div id="mdcondivFOTOEquiVIS2" style={{justifyContent:"center",display:"flex"}}>
      <div id="mdcondivdivFOTOEquiVIS2"style={{ fontWeight:"bold",backgroundImage:`url(${imageperfil})`,textAlign:"center", backgroundSize:"cover", backgroundPositionX:"center", backgroundPositionY:"center", backgroundColor:"#14B57A",   borderRadius: "20%",justifyContent:"center",alignItems:"center", display:"flex"}}>
  {Cookies.get().NomeEqui2? Cookies.get().NomeEqui2.split("")[0].toUpperCase():""}
</div>
<div style={{display:"flex", justifyContent:"center",flexDirection:"column"}}>
  <div id="mdcondiv1EquiVIS2" style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",}}>
  <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>NOME DA EQUIPE</span>
  <input id="mdinputNomeEqui" type="text" value={NomeEqui} style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", textAlign:"center",}}/>

  </div>
  <div id="mdcondiv1EquiVIS2" style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
  <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>USERNAME DA EQUIPE</span>

<input id="mdinputNomeEqui" type="text" value={handleEqui} style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA", textAlign:"center",}}/>
  </div>
<div id="txtAvisoEquiVis" style={{listStyle:"none",  color:"#A6A6A6"}}>

</div>
</div>
      </div>

      </div>
      <div id="mddivequiDesc" style={{justifyContent:"left",display:"flex",flexDirection:"column",}}>
      <div style={{display:"flex",justifyContent:"left",gap:"20px"}}>

<span id="txtdescEquiVis" style={{fontWeight:"bold"}}>
Descrição
</span>
<span id="span400pxEquivis" >

</span>

      </div>
      <div id="descinpEquiVIS" style={{ backgroundColor:"white", justifyContent:"left",display:"flex", padding:"10px"}}>
      {text}
      </div>
      <button id="btnAdicionarEquiVIS2" style={{ backgroundColor:"#279301"}}>Adicionar</button>

      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
<span id="span480pxEquivis" ></span>
        
      </div>
            </div>
            </div>
            <div style={{justifyContent:"space-around", display:"flex", width:"50vw", alignItems:"center",flexDirection:"column"}}>
            <div id="mddivEquiVIS2" style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>SETOR </span>

<input type="text" value={Setor} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>ATIVIDADE </span>

<input type="text" value={atividade} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px", justifyContent:"center"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>FUNCIONÁRIOS </span>

<input type="text" value={Func} id="inputMDEquiVIS"  style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>


            <div style={{display:"flex",flexDirection:"column",gap:"10px", justifyContent:"center"}}>
            <span id="mdspanNomeEquiEQUIVIS" style={{fontWeight:"bold"}}>FUSO HORÁRIO</span>

<input type="text" value={fusohorario} id="inputMDEquiVIS" style={{color:"white",borderRadius:"8px",borderColor:"transparent",backgroundColor:"#AAAAAA",}} />
            
            </div>

            </div>

            </div>
          </div>
        </div>
        </>
    )
}