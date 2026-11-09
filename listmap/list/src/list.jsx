function List(){
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

const listitems=fruits.map((fruit)=> <li>{fruit}</li>)
return <ul>{listitems}</ul>;

}
export default List