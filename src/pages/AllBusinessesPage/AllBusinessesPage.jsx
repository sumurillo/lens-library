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
    <div class="business">
      { businesses.map( business => (
        <div class="card">
            <Link to={`/businesses/${business._id}`} >
              <h1>{business.name}</h1>
            </Link>
              <h3>{business.location}</h3>
              <h3>{business.price}</h3>
              <a href={business.portfolio} target="_blank">Portfolio</a>

        </div>
      ))}
    </div>
    
    </>
  );
}