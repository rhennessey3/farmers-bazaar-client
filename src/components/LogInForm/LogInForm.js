import React from 'react'
import { withRouter } from 'react-router-dom';
import './LogInForm.css'
import AuthContext from '../../context/AuthContext'
import AuthApiService from '../../services/auth-api-service'



class Login extends React.Component {
    static contextType = AuthContext

    state = {
        error: null,
        email: '',
        password: '',
        loggedin: false,
      }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({
            error: null,
        })
        // const {setLoading} = this.props.appContext
        try {
        //   setLoading(true)
          const {email, password} = this.state;
          const response = await AuthApiService.login(email, password)
        //   setLoading(false)
    
          this.context.login(response.authToken)
          this.context.setCurrentUser(response.user)
          this.state.loggedin = true;
        } catch(err) {
           this.setState({error: err.message})
        }

        if (this.state.loggedin) {
            this.props.history.push('/add')
        }
        
    }
    
    componentWillUnmount() {
        this.setState({error: null})
    }
    
    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    render() {
       

        return (
            <form className='js-login-form' action='#' onSubmit={(e) => this.handleSubmit(e)}>
                <div className='error-msg'>{this.state.error}</div>
            

                <div className='form-group'>
                    <label for="email">Enter email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        required
                    />
                </div>


                <div className='form-group'>
                    <label for="psw">Enter password</label>
                    <input
                        type="password"
                        //value={this.state.password}
                        name="password"
                        id="password"
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className='form-controls'>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        )
    }   
}

export default withRouter(Login);