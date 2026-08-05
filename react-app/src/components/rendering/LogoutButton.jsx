import Button from "../styled/Button";


const LogoutButton = (props) => {
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

export default LogoutButton;