// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class Login extends Component {
  render() {
    const onClickLogin = async () => {
      const apiUrl = 'https://apis.ccbp.in/login'
      const userDetails = {username: 'rahul', password: 'rahul@2021'}
      const options = {
        method: 'Post',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(apiUrl, options)
      const responseData = await response.json()

      const onSubmitSuccess = jwtToken => {
        const {history} = this.props
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        history.replace('/')
      }

      if (response.ok === true) {
        onSubmitSuccess(responseData.jwt_token)
      }
    }

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="loginPage">
        <h1>Please Login</h1>
        <button type="button" onClick={onClickLogin}>
          Login With Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
