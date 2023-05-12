import './styles.css'

const Navbar = ({switchLogin, switchRegister}) => {

    return <div className='navbar'>
        <button onClick={switchLogin}>LOGIN</button>
        <button onClick={switchRegister}>REGISTER</button>
    </div>
}

export default Navbar;