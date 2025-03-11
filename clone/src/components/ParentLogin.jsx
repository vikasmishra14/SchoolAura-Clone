const ParentLogin = () => {
    return (
        <div className="tab-content">
            <div id="home" className='active'>
                <div className="inputs">
                    <span>Parent Mobile Number or Key</span>
                    <input type="text" />
                </div>
                <div className="inputs">
                    <span> Parent Mobile Number or Key</span>
                    <input type="text" />
                </div>
                <div className="inputs">
                    <input type="button" value='Login' />
                </div>
            </div>
        </div>
    )
}
export default ParentLogin;