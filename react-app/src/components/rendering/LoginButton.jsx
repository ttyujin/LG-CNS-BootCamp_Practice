import Button from "../styled/Button";


const LoginButton = (props) => {
    const logoutHandler=(setFlag)=>{
        setFlag(fasle);
    }
    return(
        <div>
            <Button title={`로그아웃`}
                        onClick={()=>logoutHandler(props.isLogin)}/>
        </div>
    )

}

export default LoginButton;