import React from 'react'
import{AppBar,Toolbar, Typography,IconButton,Drawer,Box,MenuItem, List,Link} from '@mui/material'
import { NavLink } from 'react-router-dom'
import Dashboard from './Component/Dashboard'
import MenuIcon from '@mui/icons-material/Menu'
import {useState,useEffect} from 'react';
import { ListItemText} from '@mui/material'
import { ListItem} from '@mui/material'
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';
function Navbar() {
  const[opendrawer, setopendrawer] = useState(false)
  const Pointer = {cursor: 'pointer'};
  

  const handleClick=(event,index)=>{
   
    setopendrawer(false)
  }
 

  const navigation = [
    {
      label: 'Dashboard',
      path: '/dashboard',

    },
    {
      label: 'Traine',
      path: '/traine',

    },
    {
      label: 'Intern',
      path: '/intern',

    },
    {
      label: 'OnJob',
      path: '/job',

    },
    {
      label: 'All Employee',
      path: '/allemployee',

    },
  ];
 
  return (
    <>
    
    <AppBar>
  
        <Toolbar>
        <MenuIcon style={Pointer} onClick={()=>setopendrawer(true)} />
        <Typography variant='h6' marginLeft={80}  >
            Employee  Management
          </Typography>
        </Toolbar>
    </AppBar>
    
    <Drawer anchor = 'left' open={opendrawer} onClose={()=>setopendrawer(false)}  >
            <Box p={1} width={250} textAlign='center' role='presentation' >
              <div style={{textAlign:'center' ,paddingRight:'30px'}}>
              <Typography variant='h3' sx={{marginBottom:'60px',}}>Menu</Typography>
           
              </div>
{/* 
 <NavLink to ="/dashboard" style={{textDecoration:'none' }}>
<MenuItem sx={{marginLeft:'40px', color:'black'}}  onClick={(event) => handleClick(event,0)}   selected={selectedIndex === 0}style={{background:selectedIndex===0?'#1976d2':" "}}   >Dashboard</MenuItem> 
</NavLink>
<NavLink to ="/traine" style={{textDecoration:'none'}}>
<MenuItem sx={{marginLeft:'40px',color:'black'}} onClick={(event)=>handleClick(event,1)}  selected={selectedIndex === 1}  style={{background:selectedIndex===1?'#1976d2':" "}}>Traine</MenuItem> 
</NavLink>
<NavLink to ="/intern" style={{textDecoration:'none'}}>
<MenuItem sx={{marginLeft:'40px',color:'black' }} onClick={(event)=>handleClick(event,2)}  selected={selectedIndex === 2}  style={{background:selectedIndex===2?'#1976d2':" "}} >Intern</MenuItem> 
</NavLink>
<NavLink to ="/job" style={{textDecoration:'none'}}>
<MenuItem sx={{marginLeft:'40px',color:'black'}} onClick={(event)=>handleClick(event,3)}  selected={selectedIndex === 3}   style={{background:selectedIndex===3?'#1976d2':" "}}>OnJob</MenuItem> 
</NavLink>
<NavLink to ="/allemployee" style={{textDecoration:'none'}}>
<MenuItem sx={{marginLeft:'40px',color:'black'}} onClick={(event)=>handleClick(event,4)}  selected={selectedIndex === 4}   style={{background:selectedIndex===4?'#1976d2':" "}}>All Employee</MenuItem> 
</NavLink>  */}
{navigation.map((item, i) => (


        <NavLink
          exact
          style={{textDecoration:'none',color:'black' }}
          // style={({isActive})=>{
          //   console.log(isActive)
          //   return {color:isActive?'red':'black'}}}
          key={i}
          to={`${item.path}`}
        >
          <ListItem style={{background:window.location.pathname === item.path ?'red':" "}}>
            <ListItemText onClick={(event) => handleClick(event)} >{item.label}</ListItemText>
          </ListItem>
        </NavLink>
      ))
     }





            </Box>
        </Drawer>
  
    </>
   
  )
}

export default Navbar