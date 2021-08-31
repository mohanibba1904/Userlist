import FinalDisplay from "./FinalDisplay"
import './displayuser.css'

const DisplayUser = props => {
    const {data} = props
    const {support} = data
    const {url , text} = support
    const value = data
    const lists = value.data
    console.log(url)
    console.log(text)

    return (
      <div className="list">
        <div>
       {lists.map(eachUser => (
            <FinalDisplay
              userDetails={eachUser}
            />
            ))}
            <p className="paragraphurl">{url}</p>
            <p>{text}</p>
          </div>
          </div>
    )
  }
  
  export default DisplayUser