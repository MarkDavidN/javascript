function Greetings(prop) {
    if(prop.loggedin){
        return(
            
            <h1>Welcome {prop.name}</h1>)
    
    }           
    else{
        return(
            <h1>Welcome Guest..enter username</h1>
        )
    }    }



export default Greetings