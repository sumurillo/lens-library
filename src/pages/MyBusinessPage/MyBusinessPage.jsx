import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as businessesService from '../../utilities/businesses-service';
import * as usersService from '../../utilities/users-service';


export default function MyBusiness() {
  const [business, setBusiness] = useState(null);
  let {_id} = useParams();

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await fetch(`/api/business/${user._id}/${business._id}`);
        const user = await businessesService.getBusiness(user);
        const photographerBusiness = await response.json();
        setBusiness(photographerBusiness);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBusiness();
  }, [_id]);

  // async function deleteBusiness(id) {
  //   await deleteBusiness(id)
  //   const oneBusiness = getBusiness()
  //   setBusiness(oneBusiness)
  // }


  return (
    <>
    <h3>My Business Page</h3>
    {/* { business.map ((business) =>
      <div id="getBusiness">
        <h1>{business.name}</h1>
        <h3>{business.location}</h3>
        <h3>{business.price}</h3>
        <h3>{business.services}</h3>
        <a href={business.portfolio}>{business.portfolio}</a> */}
      {/* <button onClick={ () => deleteBusiness(business._id)}>Delete</button> */}
      {/* <Link to={`/business/${business._id}/edit`}>Edit</Link> */}
      {/* </div>
    )} */}
    </>
  );
}
