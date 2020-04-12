import React from "react";
import Faker from "faker";
import Userprofile from "./userprofile";
const APP = () => {
   return(
   <div className="container" style={{"marginTop":"20px"}}>
   <Userprofile name = "Harry" profile = "Graphics designer" url={Faker.image.avatar()}/>
   <Userprofile name = "Joe" profile = "Machine learning" url={Faker.image.avatar()}/>
   <Userprofile name = "Ross" profile = "Data science" url={Faker.image.avatar()}/>
   </div> 
   )
   
};

export default APP;
