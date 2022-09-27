import React, { useState } from 'react'
import { Typography,TextField, SliderValueLabel } from '@mui/material'
import {useEffect} from 'react'
import axios from 'axios'
import DeleteIcon from "@mui/icons-material/Delete";
import DataTable from 'react-data-table-component' 
import Delete from "./Delete";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import Getintern from "./Getintern"
function Intern() {
  const clickhandler =async(id)=>{
 
    const result = await Delete(id)
    console.log('result',result)
    if(result === true){
      console.log('h')
      getintern();
    }
   else{
    console.log('j')
   }
}
const navigate = useNavigate();
const[searchvalue,setsearchvalue]=useState("")
  const[data,setdata] = useState("")
  const columns=[
    {
      name:'S.no',
      cell: (  row,index) => index + 1
    },
    {
      name:'Name',
      
      selector:(row)=>row.name,
      
      
    },
    {
      name:'Email',
      selector:(row)=>row.email
    },
    {
      name:'PhoneNumber',
      selector:(row)=>row.mobile
    },
    {
      name:'Employ Type',
      selector:(row)=>row.employee_type
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
 <DeleteIcon  style={{color:'red'}}onClick={()=>clickhandler(row._id)}
        />,
        <EditIcon onClick={() => {
           
          navigate('/editintern',{state:{details:row}})
        }} />
      
        </div>)
       
    },
  ]

  const[filter,setfilter]=useState("")
  useEffect(()=>{
    getintern();
  },[])
  const getintern = async()=>{
    const details = await Getintern()
    const result=[]
    let sort ;
   details
   .map((item, index) => {
          result.push({
              name: item.name,
              email: item.email,
              mobile: item.mobile,
              employee_type: item.employee_type,
              _id: item._id,
              gender: item.gender,
              date_of_birth: item.date_of_birth,
              joining_date: item.joining_date,
            });
            sort =   result.sort(function(a, b) {
              var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
               if (nameA < nameB)
              return -1
          if (nameA >nameB)
              return 1;
          return 0;
          })
        
          })
        
  
  setdata(sort)
  setfilter(sort)
 
   }
 useEffect(()=>{
  
  if(searchvalue){
  
  var result = true
  }else{
    result= false
  }
const datatoshow = result?data.filter(value=>value.name.toLowerCase().includes(searchvalue.toLowerCase())):data
console.log(datatoshow)
setfilter(datatoshow)

     },[searchvalue])
 
  return (
   
   <>
   <div className='d-flex flex-row'>
   <div style={{flex: "1 1 auto",textAlign: "center"}}>
   <Typography variant='h6' sx={{marginTop:'100px',  }}>
     Intern
</Typography>
</div>
    <div style={{marginTop: "100px",}} >
   <TextField id="outlined-basic"  variant="filled"  onChange={(e) => setsearchvalue(e.target.value)}  type="text"  label="Search here" size="small"/>
   </div>
  


</div>
<DataTable
            columns={columns}
            data={filter}
        />
   </>
  )
}

export default Intern