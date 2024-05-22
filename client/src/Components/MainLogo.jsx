import Logo from '../assets/Logo/yctlibrary.png'

const MainLogo = () => {
    return (
        <div className="d-flex gap-2 align-items-center flex-nowrap">
            <img src={Logo} alt="Logo" className="img-fluid" style={{ maxHeight:"60px", borderRadius: "50%" }}/>
            <span className='fw-bold tezt-dark'>YCTLIBRARY</span>
        </div>
    )
}

export default MainLogo;