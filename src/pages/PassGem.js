import {useState} from "react"
const PassGem = () => {

    const [generated, setGenerated] = useState('')

    function genPassword(e){
        e.preventDefault()
        var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var passwordLength = 12;
        var password = ""
        for ( var i = 0; i <= passwordLength; i++){
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1)
        }
        setGenerated(password)        
    }

    async function copy(e){
        e.preventDefault()
        await navigator.clipboard.writeText(generated);
        alert("Copied the text: " + generated);
    }


    return(
        <div>
            <div>
                <h1 className="title">Passowrd Generator</h1>
                <div className="pass-main">
                    <div className="pass-box">
                        <input type="text" className="pass-input" id="password" disabled value={generated}/>
                        <div className="pass-btns">
                            <span><button className="pass-btn" onClick={genPassword}>Generate</button> <button className="pass-btn" onClick={copy}>Copy</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PassGem