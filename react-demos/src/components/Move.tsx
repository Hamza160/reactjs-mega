
function Move() {
    const moveHandler = () => {
        console.log("Mouse move event fired")
    }
    return (
        <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, quisquam officiis! Quo fuga quod provident impedit ducimus, neque libero amet!</p>
    )
}

export default Move;