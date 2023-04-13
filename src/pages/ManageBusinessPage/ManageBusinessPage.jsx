import { useState } from 'react';
import * as businessesService from '../../utilities/businesses-service';


export default function ManageBusinessPage() {
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
    <h1>New Task</h1>
    <form action="" onSubmit={handleSubmit}>
    <label htmlFor="name">Name:
        <input type="text" name="name" id="name" value={ business.name } onChange={handleChange} />
      </label>
      <label htmlFor="location">Location:
        <input type="text" name="location" id="location" value={ business.location } onChange={handleChange} />
      </label>
      <label htmlFor="price">Pricing Range:</label>
            <select name="price" id="price" onChange={handleChange}>
              <option value="$-$$">$-$$</option>
              <option value="$$-$$$">$$-$$$</option>
              <option value="$$$-$$$$">$$$-$$$$</option>
            </select>
      <label htmlFor="services">Services:</label>
      <input type="text" name="services" id="services" value={ business.services } onChange={handleChange} />
      <input type="submit" value="Submit" />
    </form>
    </>

  );
}