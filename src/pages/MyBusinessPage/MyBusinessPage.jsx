import React, { useState, useEffect } from 'react';
import * as businessesService from '../../utilities/businesses-service';
import * as usersService from '../../utilities/users-service';


export default function MyBusiness() {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        // const photographerBusiness= await businessesService.getBusiness(user);
        const user = await usersService.getUser();
        console.log(user.business)
        const retrievedBusiness = await businessesService.getBusinessDetail(user.business);
        console.log(retrievedBusiness)
        // const response = await fetch(`/api/business/${user._id}/${business._id}`);
        // setBusiness(photographerBusiness);
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
    <h3>My Business Page</h3>
    <div>
      
    </div>
    </>
  );
}
