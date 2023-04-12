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

  <h2>Your Business Page</h2>

  );
}