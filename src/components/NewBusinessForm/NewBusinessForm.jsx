import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import business from '../../../models/business';

export default class SignUpForm extends Component {
  state = {
    name: '',
    location: '',
    price: '',
    services: '',
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
      const {name, location, price, services} = this.state;
      const formData = {name, location, price, services};
      const user = await newBusiness(formData);
      this.props.setBusiness(business);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.business !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Business Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label>Location</label>
            <input type="text" name="location" value={this.state.location} onChange={this.handleChange} required />
            <label>Price</label>
            <input type="int" name="price" value={this.state.price} onChange={this.handleChange} required />
            <label>Services</label>
            <input type="text" name="services" value={this.state.services} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SUBMIT</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}