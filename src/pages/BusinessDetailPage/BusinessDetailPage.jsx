import { useEffect, useState } from "react";
import * as businessesService from '../../utilities/businesses-service';
import { useParams } from "react-router-dom";


export default function BusinessDetail() {
  const [business, setBusiness] = useState([])
  let {id}= useParams()

  useEffect(function() {
    console.log('im in useEffects')
      async function retrieveBusiness() {
          const retrievedBusiness = await businessesService.getBusinessDetail(id);
          setBusiness(retrievedBusiness)
      }
     retrieveBusiness()
  }, []) 


  return (
    <>
    <h1>BusinessDetailPage</h1>
    <div>
      <h1>{business.name}</h1>
      <p>Location: {business.location}</p>
      <p>Price Range: {business.price}</p>
      <p>Services: {business.services}</p>
      <p>Check out my work: {business.portfolio}</p>
    </div>
    </>
  );
};
