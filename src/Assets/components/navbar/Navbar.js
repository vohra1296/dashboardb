import "./Navbar.css";
import avatar from "../../../Assets/avatar.png"
import { Icon } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar_right'>
                <a href="#">
                    <img className="akash" width='30' src={avatar} alt='avatar'>
                    </img>
                </a>


                <div className='user'>
                    <h5> Akash Vohra
            <h6>avohra@dummy.com</h6>
                    </h5>

                </div>
                <p><Icon name='caret square down'></Icon></p>
            </div>



        </nav>
    )
}

export default Navbar;