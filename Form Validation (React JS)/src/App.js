import React, { useState } from "react";
import Form from "./Components/AddUser/Form";
import Layout from "./Components/AddUser/Layout";
import Footer from "./Components/UI/Footer";



const App = (props) => {
  const [usersList, setUsersList] = useState([]);

  // //   const [usersList, setUsersList] = useState([])

  //  const formSubmitHandler = (uName,uNumber,uEmail,uPassword,uPasswordAgain,uFemale,uMale,uOther) => {
  //     setUsersList((prevUsersList) => {
  //       return [...prevUsersList, {name: uName, number: uNumber, email: uEmail,password: uPassword,passwordAgain: uPasswordAgain,female: uFemale,male: uMale,other: uOther, id: Math.random().toString()}]
  //     })
  //   }

  const addUserHandler = (
    uName,
    uNumber,
    uEmail,
    uPassword,
    uPasswordAgain,
    uFemale,
    uMale,
    uOther
  ) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          name: uName,
          number: uNumber,
          email: uEmail,
          password: uPassword,
          passwordAgain: uPasswordAgain,
          female: uFemale,
          male: uMale,
          other: uOther,
          idName: Math.random().toString(),
          idNumber: Math.random().toString(),
          idEmail: Math.random().toString(),
          idPassword: Math.random().toString(),
          idPasswordAgain: Math.random().toString(),
          idGender1: Math.random().toString(),
          idGender2: Math.random().toString(),
          idGender3: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <div>
      <Form onAddUser={addUserHandler} />
      <Layout users={usersList} />
      <Footer />
    </div>
  );
};

export default App;
