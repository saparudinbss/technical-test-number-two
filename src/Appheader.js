import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
    const [showusername, showusernamemod] = useState('');
    const [showmenu, showmenumod] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login') {
            showmenumod(false);
        } else {
            showmenumod(true);
            let username = sessionStorage.getItem('username');
            if (username === '' || username === null) {
                usenavigate('/login');
            } else {
                showusernamemod(username);
            }
        }

    }, [location])
    return (
        <div>
            {showmenu &&
                <div className="header">
                    <span style={{ marginLeft: '70%' }}>Welcome <b>{showusername}</b></span>
                    <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
                </div>
            }
        </div>
    );
}

export default Appheader;