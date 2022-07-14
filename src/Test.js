
function Test() {
    const colors = ['red', 'green', 'blue', 'yellow']
    
    return (
        <div>
            {colors.map(color => (<h3>${color}</h3>))}
        </div>
    )
}

export default Test;