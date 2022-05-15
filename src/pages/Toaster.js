const Toaster = () => {
    function createNotification(e){
        const toaster = document.getElementById('toaster');
        const notification = document.createElement('div');
        e.preventDefault();
        notification.classList.add('toast')
        notification.innerHTML = 'Hey Im a Toaster'
        toaster.appendChild(notification);
        setTimeout(() =>{
            notification.remove();
        }, 3000)
    }
    return (
        <div className="main">
            <h1 className="title">Toaster</h1>
            <div className="t-container">
                <button className="btn" onClick={createNotification}>Click Me!</button>
                <div id="toaster" className="toaster">
                </div>
            </div>
        </div>
    )
}
export default Toaster