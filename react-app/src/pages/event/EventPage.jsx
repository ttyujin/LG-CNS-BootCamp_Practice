import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {

    const [email, setEmail] = useState('');
    const [pswd, setPswd] = useState('');

    const moverUrl = useNavigate();

    const signInHandler = async (e, email, pswd) => {
        e.preventDefault();

        await api.get(`/users?email=${email}&pswd=${pswd}`)
                .then(response => {
                    console.log(`debug >>>> response : `, response);

                    const ary = response.data;

                    if(ary.length > 0){
                        // 인증된 사용자 정보 관리
                        // sessionStorage, localStorage
                        // 인증 - 신원확인
                        // 인가 - 특정 url 접근 할 수 있는 권한
                        // json web token(jwt) - token(header)
                        // response.headers.get('Authorization');
                        // localStorage.setItem('token','token-xxxxxxxxx');
                        //react component transition

                        const user = ary[0];

                        localStorage.setItem('userName', user.name);

                 moverUrl('/success', {
                        state: {
                            user,
                            from:'/signIn'
                        } //post방식
                    });
                } else {
                    moverUrl('/error?category=react&sort=latest'); //get방식
                       }
                })
                .catch(err => {
                    console.log(`debug >>>> error : `, err);
                });
    }

    useEffect(() => {
        console.log(`debug >>>> email : `, email);
        console.log(`debug >>>> password : `, pswd);
    });

    return(
        <div className='container'>
    
            <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">Email:</label>

                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="pwd" className="form-label">Password:</label>

                <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                    value={pswd}
                    onChange={(e) => setPswd(e.target.value)}
                />
            </div>

            <div className="form-check mb-3">
                <label className="form-check-label">

                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                    />

                    Remember me
                </label>
            </div>

            <div>
                <Button
                    variant='primary'
                    onClick={(e) => signInHandler(e, email, pswd)}>
                    SignIn
                </Button>
            </div>

        </div>
    );
}

export default EventPage;