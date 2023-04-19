import React, { useState, useEffect } from 'react';
import * as businessesService from '../../utilities/businesses-service';
import * as usersService from '../../utilities/users-service';


export default function MyBusiness() {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const user = await usersService.getUser();
        console.log(user.business)
        const retrievedBusiness = await businessesService.getBusinessDetail(user.business);
        console.log(retrievedBusiness)
        setBusiness(retrievedBusiness);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBusiness();
  }, []);

  // async function deleteBusiness(id) {
  //   await deleteBusiness(id)
  //   const oneBusiness = getBusiness()
  //   setBusiness(oneBusiness)
  // }


  return (
    <>
    <h1>My Business Page</h1>
    <div>
      <h1>{business.name}</h1>
      <h3>{business.location}</h3>
      <h3>{business.price}</h3>
      <h3>{business.services}</h3>
      <a href={business.portfolio}>{business.portfolio}</a>
    </div>
    </>
  );
}
