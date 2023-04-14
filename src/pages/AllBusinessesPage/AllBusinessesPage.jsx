import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as businessesService from '../../utilities/businesses-service';

export default function AllBusinessesPage() {
  const [businesses, setBusinesses] = useState([])
  useEffect(function(){
    async function getAllBusinesses() {
      const allBusinesses = await businessesService.get()
      setBusinesses(allBusinesses)
    }
    getAllBusinesses()
  },[])
  return (
    <>
    <h1>AllBusinessesPage</h1>
    <Link to={'/models/business'} >
      <div>
        {/* <h1>{business.name}</h1>
        <h3>{business.location}</h3>
        <h3>{business.price}</h3>
        <h3>{business.services}</h3>
        <h3>{business.photos}</h3>
        <img src={business.posterPath} alt="" /> */}
      </div>
    </Link>
    </>
  );
}