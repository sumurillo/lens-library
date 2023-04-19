import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import * as businessesService from '../../utilities/businesses-service';
import * as usersAPI from '../../utilities/users-api';

export default function AllBusinessesPage() {
  const [user, setUser] = useState(null)
  useEffect(function() {
    async function getAUser() {
      const userReceived = await usersAPI.getUser();
      setUser(userReceived);
    }
    getAUser();
  }, []);
  

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
    <h1>Photographers</h1>
    <div id="businessCard">
      { businesses.map( business => (
        <div id="business">
            <Link to={`/businesses/${business._id}`} >
              <h1>{business.name}</h1>
            </Link>
              <h3>{business.location}</h3>
              <h3>{business.price}</h3>
              <h3>{business.services}</h3>
              <a href={business.portfolio} target="_blank">Portfolio</a>
        </div>
      ))}
    </div>
    </>
  );
}