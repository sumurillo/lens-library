import { useEffect, useState } from "react";
import * as businessesService from '../../utilities/businesses-service';

export default function AllBusinessesPage() {
  const [businesses, setBusinesses] = useState([])
  useEffect(function(){
    async function retrieveBusinesses() {
      const retrievedBusinesses = await businessesService.get()
      setBusinesses(retrievedBusinesses)
    }
    retrieveBusinesses()
  },[])
  return (
    <>
    <h1>AllBusinessesPage</h1>
    <div>
      { businesses.map( business => (
              <div>
              <h1>{business.name}</h1>
              <h3>{business.location}</h3>
              <h3>{business.price}</h3>
              <h3>{business.services}</h3>
              <a href={business.portfolio}>Check out my portfolio!</a>
            </div>
      ))}
    </div>
    </>
  );
}