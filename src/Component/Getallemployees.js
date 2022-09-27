import axios from 'axios'

async function Getallemployees() {
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_BASEURL}/employee`,
    headers: {
      "Content-Type": "application/json",
    }
  };

  
    //   .then(function (response) {
    //     var employee = response.data;
    //     console.log(response.data);
    //     const details = [];
    //     response.data.map((item, index) => {
    //       details.push({
    //         name: item.name,
    //         email: item.email,
    //         mobile: item.mobile,
    //         employee_type: item.employee_type,
    //         id: item._id,
    //         gender: item.gender,
    //         date_of_birth: item.date_of_birth,
    //         joining_date: item.joining_date,
    //       });
    //     });
        

    try {
      const response = await axios(config);
      const data = await response.data
      return data
  } catch (e) {
      console.error(e);
  }
 
     
      
  }
export default Getallemployees