import axios from "axios";

async function Delete(id) {
  console.log(id);
  var data = JSON.stringify({
    id: id,
  });

  var config = {
    method: "post",
    url: `${process.env.REACT_APP_BASEURL}/employee/deleteEmployee`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios(config);
    const data = await response.data.success
    return data
} catch (e) {
    console.error(e);
}
}
export default Delete;
