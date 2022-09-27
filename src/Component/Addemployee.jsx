import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

import * as yup from "yup";
function Addemployee(props) {
  const location = useLocation();
  const{state}=location
  console.log(location,"ll")
  const [defaultValues, setdefaultValues] = useState({
    Name: "",
    Email: "",
    Number: "",
    Gender: "",
    EmployeeType: "",
    dob: "",
    joiningdate: "",
  });
  // console.log(state.state.details.date_of_birth.split('T'))

  // if(state.length){

  //   console.log("k")

  // }
  // else{
  //   console.log(state)

  // }

  // const detail = state.state.details.name
  // console.log(detail)



  useEffect(() => {
    if (location.state.details === " ") {
      setdefaultValues({});
    } else {
      
      const newDefaultValues = {}
      newDefaultValues.Name = location.state.details.name
      newDefaultValues.Email = location.state.details.email
      newDefaultValues.Number= location.state.details.mobile
      newDefaultValues.Gender = location.state.details.gender
      newDefaultValues.EmployeeType = location.state.details.employee_type
      newDefaultValues.dob = location.state.details.date_of_birth.split('T')[0]
      newDefaultValues.joiningdate = location.state.details.joining_date.split('T')[0]
      setdefaultValues(newDefaultValues)
    }
  },[]);

  const navigate = useNavigate();


  const validationschema = yup.object().shape({
    Name: yup.string().required("Enter your name"),
    Email: yup
      .string()
      .required("Enter your email")
      .email("please enter valid email"),
    Number: yup.string().required("Enter your phone number"),
    Gender: yup.string().required("Enter your gender"),
    EmployeeType: yup.string().required("Enter your employe type"),
    dob: yup.string().required("Enter your dob"),
    joiningdate: yup.string().required("Enter your joining date"),
  });

  const handleSubmit=(values)=>{

  }

  function addemployee(values) {
  
    var data = JSON.stringify({
      name: values.Name,
      date_of_birth: values.dob,
      mobile: values.Number,
      email: values.Email,
      gender: values.Gender,
      employee_type: values.EmployeeType,
      joining_date: values.joiningdate,
    });
    console.log(data);

    var config = {
    
      method: "post",
      url: `${process.env.REACT_APP_BASEURL}/employee/addEmployee`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    console.log(process.env.REACT_APP_BASEURL,"app")
    axios(config)
      .then(function (response) {
        if (response.data.success == true) {
          navigate("/allemployee");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function editemployee(values){
console.log(values,"value")
  var data = JSON.stringify({
     id:location.state.details._id,
     name: defaultValues.Name === " "?location.state.details.name:values.Name ,
    date_of_birth: defaultValues.dob === " "?location.state.details.date_of_birth:values.dob,
    mobile: defaultValues.Number === " "?location.state.details.mobile:values.Number,
    email: defaultValues.Email === " "?location.state.details.email:values.Email,
    gender:  defaultValues.Gender === " "?location.state.details.gender:values.Gender,
    employee_type:defaultValues.EmployeeType === " "?location.state.details.employee_type:values.EmployeeType ,
    joining_date: defaultValues.joiningdate === " "?location.state.details.joining_date:values.joiningdate
  });

  var config = {
    method: 'post',
    url: `${process.env.REACT_APP_BASEURL}/employee/editEmployee`,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
  
    if (response.data.success == true) {
      navigate("/allemployee");
    }
  
  })
  .catch(function (error) {
    console.log(error);
  });

  }

  return (
    <>
      <div className="container">
        <div className="col-md-12 mt-5justify-content-center ">
          <Formik
            initialValues={defaultValues}
            validationSchema={validationschema}
            onSubmit={  (values)=>{if(location.state.details === " ")
            {
              addemployee(values);
            }else{
             
             editemployee(values);
            }}  }
            enableReinitialize
          >
            <Form style={{ margin: "112px" }}>
              <div className=" form-group col-md-12 mt-4">
                <label>Enter your Name</label>
                <Field type="text" name="Name" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="Name" />
                </p>
              </div>
              <div className=" col-md-12 mt-4">
                <label>Enter your email</label>
                <Field type="email" name="Email" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="Email" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <label>Enter your number</label>
                <Field type="number" name="Number" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="Number" />
                </p>
              </div>
              <div className=" col-md-12 mt-4">
                <label>Enter your gender</label>
                <Field type="text" name="Gender" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="Gender" />
                </p>
              </div>
              <div className=" col-md-12 mt-4">
                <label>Enter your employe type</label>
                <Field  name= "EmployeeType"  component="select"  className="form-control">
                <option value=" " disable>Select the employee type</option>
                <option value="onJob" label="onJob"></option>
                <option value = "intern" label="intern"></option>
                <option value="trainee" label="trainee"></option>

             
              </Field>
                <p className="text-danger">
                  <ErrorMessage name="EmployeeType" />
                </p>
              </div>
              <div className=" col-md-12 mt-4">
                <label>Enter your dateofbirth</label>
                <Field type="date" name="dob" className="form-control" />
                <p className="text-danger">
                  <ErrorMessage name="dob" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <label>Enter your joining date</label>
                <Field
                  type="date"
                  name="joiningdate"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="joiningdate" />
                </p>
              </div>
              <div className="col-md-12 mt-4">
                <Button className="mr-5 " variant="contained" type="submit">
                  Submit
                </Button>

                <Button
                  className="ml-1"
                  variant="contained"
                  onClick={() => navigate("/allemployee")}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Addemployee;
