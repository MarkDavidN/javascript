import Proptype from "prop-types"
function Greetings(prop) {
    if(prop.loggedin){
        return(
            
            <h1>Welcome {prop.name}</h1>)
    
    }           
    else{
        return(
            <h1>Welcome Guest..enter username</h1>
        )
    } 
Greetings.propTypes={
    name:Proptype.string,
    loggedin:Proptype.bool
    }
Greetings.defaultProps={
    name:"Guest",
    loggedin:false
}   


export default Greetings