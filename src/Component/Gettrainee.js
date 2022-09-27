import axios from 'axios'

async function Gettrainee() {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASEURL}/dashboard/getTrainees`,
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
export default Gettrainee