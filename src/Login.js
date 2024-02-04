import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [username, usernamechange] = useState('');
    const [password, passwordchange] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
    sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            let inputobj={"userName": username,"userPass": password};
            fetch("https://5z0e4.wiremockapi.cloud/auth-service/login",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.userName === username) {
                        toast.success('Success');
                        sessionStorage.setItem('username',username);
                        usenavigate('/')
                    }else{
                        toast.error('Something went wrong. Please try again later');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter User Name');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }

    return (
        <div className="row">
            <div className="row justify-content-md-center mt-5">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Login</h5>
                            <form onSubmit={ProceedLogin} className="container">
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            User Name
                                    </label>
                                    <input value={username} onChange={e => usernamechange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input type="password" value={password} onChange={e => passwordchange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        type="submit"
                                        className="btn btn-primary btn-block">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}

export default Login;