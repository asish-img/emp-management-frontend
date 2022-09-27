import axios from 'axios'

async function Getintern() {

  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASEURL}/dashboard/getInterns`,
    headers: {
      "Content-Type": "application/json",
    }
  };

  
   
        

  try {
    const response = await axios(config);
    const data = await response.data.data
    return data
} catch (e) {
    console.error(e);
}

 
     
      
  }
export default Getintern