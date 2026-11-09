function Button() {
    const handleclick=() => {
        console.log("Button clicked!");
    };

    return <button onClick={handleclick}>Click me</button>;


}
export default Button