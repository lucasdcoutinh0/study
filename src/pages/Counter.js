import {useState} from "react"

const Counter = ()  => {

    const [number, setNumber] = useState(0)

    function add(e){
        e.preventDefault()
        setNumber(number + 1)
    }
    function subtract(e){
        e.preventDefault()
        setNumber(number - 1)
    }

    return(
        <div className="main">
            <h1 className="title">Counter</h1>
            <div className="container-box">
                <div className="counter-button">
                    <div className="number" onClick={subtract}>
                        -1
                    </div>
                </div>
                <span className="space"> </span>
                <div className="counter-box">
                    <div className="number" style={{paddingTop: "150px"}}>
                        {number}
                    </div>
                </div>
                <span className="space"> </span>
                <div className="counter-button" onClick={add}>
                    <div className="number">
                        +1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter