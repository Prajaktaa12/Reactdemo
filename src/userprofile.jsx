import React from "react";
const Userprofile = (props) => {
    let {url,name,profile} = props
    return (
    <div className="row">
    <div className="col-md-2">
    <img src={url} alt="human"/>
    </div>
    <div className="col-md-2">
      <button type="button" className="btn btn-danger btn-md" style={{"background-color":"blue", "border":"blue"}}>{name}</button>
      </div>

      <div className="col-md-12">
        <h5>{profile}</h5>
      </div>
      
      </div>
    )

}
 
 export default Userprofile;