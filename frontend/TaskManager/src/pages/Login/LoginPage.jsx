import Button from "../../components/Button"
import LoginForm from "./LoginForm"
import LoginRegisterModal from "./LoginRegisterModal"

const LoginPage = () => {

    function test() {
        console.log("hola")
    }

    return(
        <div>
            <LoginForm></LoginForm>
            <LoginRegisterModal></LoginRegisterModal>
        </div>
    )
}

export default LoginPage