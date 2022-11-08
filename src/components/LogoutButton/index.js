// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
