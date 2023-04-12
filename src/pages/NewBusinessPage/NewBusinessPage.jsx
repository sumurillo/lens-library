import { useState } from 'react';
import * as businessesService from '../../utilities/businesses-service';


export default function NewBusinessPage() {
  const [business, setBusiness] = useState({
    name: '',
    location: '',
    price: '$-$$',
    services: '',
    // photos: '',
  });

  function handleChange(evt) {
    setBusiness({ ...business, [evt.target.name]: evt.target.value });
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    await businessesService.create(business);
    setBusiness({ name: '', location: '', price: '', services: '' })
  }
  return (
    <>
  <h2>Your Business Page</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Business Name</label>
        <input type="text" name="name" value={ state.name } onChange={handleChange} required />
        <label>Location</label>
        <input type="text" name="location" value={ state.location } onChange={handleChange} required />
        <label>Price</label>
        <select name="price" id="price" value={ state.price } onChange={handleChange}>
          <option value="$-$$">$-$$</option>
          <option value="$$-$$$">$$-$$$</option>
          <option value="$$$-$$$$">$$$-$$$$</option>
        </select>
        <label>Services</label>
        <input type="text" name="services" value={ state.services } onChange={handleChange} required />
        {/* <label>Photos</label>
        <input type="img" name="photos" value={this.state.photos} onChange={this.handleChange} required /> */}
        <button type="submit" disabled={disable}>SUBMIT</button>
      </form>
  </>
  );
}