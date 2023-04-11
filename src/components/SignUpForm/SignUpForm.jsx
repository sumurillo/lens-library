import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Route, Navigate } from 'react-router-dom';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    userType: 'client',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password, userType} = this.state;
      const formData = {name, email, password, userType};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      if (userType === 'photographer') {
        <Route exact path="/newBusiness">
          <Navigate to="/newBusiness" />
        </Route>
      } else {
        <Navigate to="/" />
      }
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Email</label>
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label>Client or Photographer?</label>
            <select name="userType" id="userType" onChange={this.handleChange}>
              <option value="client">Client</option>
              <option value="photographer">Photographer</option>
            </select>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label>Confirm</label>
            <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}