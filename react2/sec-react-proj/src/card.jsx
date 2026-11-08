import pic from './assets/pexels-max-fischer-5868276.jpg'
function Card(){
    return(
        <div className="card">
            <img src={pic} alt="profile picture"className="hi" />
            
            <h1>mark david</h1>
            <p>web developer</p>

        </div>
    )


}
export default Card