function Fruits(){
    const fruits=[{id:2,name:"apple",calories:23},{id:3,name:"banana",calories:56},{id:4,name:"mango",calories:56},{id:5,name:"grapes",calories:5}]
    const fruitlist=fruits.map(fruit=> <li key={fruit.id}>{fruit.name}:{fruit.calories}</li>)
    return(<ul>{fruitlist}</ul>)



}
export default Fruits