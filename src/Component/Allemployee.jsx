import React from "react";
import { Button, Typography,TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { textAlign } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import Delete from "./Delete";
import EditIcon from "@mui/icons-material/Edit";
import Getallemployees from "./Getallemployees";
import Addemployee from "./Addemployee";
function Allemployee(props) 
{
 
  const navigate = useNavigate();
  const clickhandler = async (id) => {
    const result = await Delete(id);
    console.log("result", result);
    if (result === true) {
      console.log("h");
      emplooyee();
    } else {
      console.log("j");
    }
  };


 

  const [data, setdata] = useState("");
  const[filter,setfilter]=useState("")
  const[searchvalue,setsearchvalue]=useState("")
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      name: "S.no",
      cell: (row, index) => index + 1,
    },
    {
      name: "Name",

      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "PhoneNumber",
      selector: (row) => row.mobile,
    },
    {
      name: "Employ Type",
      selector: (row) => row.employee_type,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <DeleteIcon
            style={{ color: "red", marginLeft: "5px" }}
            onClick={() => clickhandler(row._id)}
          />,
          
          <EditIcon onClick={() => {
           
            navigate('/editemployee',{state:{details:row}})
          }} />
        </div>
      ),
    },
  ];
  useEffect(() => {
  
  emplooyee()
  }, []);
  const emplooyee = async()=>{
  const details = await Getallemployees()
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
      
console.log(sort)
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
      {/* <button type="button" class="btn btn-primary"  data-target="#exampleModal" >
 
</button> */}

      <div style={{ display: "flex" }}>
        <div style={{ flex: "1 1 auto", textAlign: "center" }}>
          <Typography variant="h6" sx={{ marginTop: "100px" }}>
            All Employee
          </Typography>
        </div>
        <div style={{marginTop: "100px",marginRight:"30px"}} >
   <TextField id="outlined-basic"  variant="filled"  onChange={(e) => setsearchvalue(e.target.value)}  type="text"  label="Search here" size="small"/>
   </div>
  

        <div>
          <Button
            sx={{
              // position: "absolute",
              // marginLeft: "1300px",
              marginTop: "100px",
            }}
            onClick={() => navigate("/addemployee",{state:{details:" "}})}
            variant="contained"
          >
            Add Employe
          </Button>
        </div>
      </div>

      <DataTable columns={columns} data={filter} />
     
    </>
  );
}

export default Allemployee;
