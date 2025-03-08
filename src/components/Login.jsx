import {useState} from 'react'
function Login() {


    const [userName, setUserNamme] = useState("")

    const [password, setPassword] = useState("")

    function handleUserName(e){
      setUserNamme(e.target.value)
    }

    function handlePassword(e){
      setPassword(e.target.value)
    }


    return(
      <div>
        <div>Authenticated Successfully</div>
        <div>Authenticated Failed. please check your credentials</div>
        <form>
          <div>
            <label>User Name</label>
            <input name="username" type="text" placeholder="Enter username" value={userName} onChange={handleUserName}></input>
          </div>
          <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="Enter Password" value={password} onChange={handlePassword}></input>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }

  export default Login;
