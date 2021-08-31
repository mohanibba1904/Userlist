import './finaldisplay.css'

const FinalDisplay = props => {
    const {userDetails} = props
    const {id , email, first_name, last_name, avatar} = userDetails
    console.log(userDetails)

    return (
      <div className="usercontainer">
          <div className="image-container"> <img src= {avatar} alt="avatar" className="image"/> </div>
          <div>
          <div className="items"><h1 className="heading"><span className="headingspan">Name </span>{" "}{first_name} {" "} {last_name} </h1>
          <h3><span className="headingspan">Id</span>{" "}{id} </h3>
          <p><span ><b>Email</b></span>{" "}{email} </p></div>
          </div>
          </div>
    )
  }
  
  export default FinalDisplay