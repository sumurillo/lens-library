import React, { useState, useEffect } from 'react';
import * as businessesService from '../../utilities/businesses-service';
import { useParams } from 'react-router-dom';


export default function MyBusiness() {
  const [myBusiness, setMyBusiness] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`/api/business/${id}`);
        const business = await response.json();
        setMyBusiness(business);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);


  return (
    <div>
      <h1>{MyBusiness.name}</h1>
      <h3>{MyBusiness.location}</h3>
      <h3>{MyBusiness.price}</h3>
      <h3>{MyBusiness.services}</h3>
      <a href={MyBusiness.portfolio}>{MyBusiness.portfolio}</a>
      <input type="submit" value="Edit" />
      <input type="submit" value="Delete" />
    </div>
  );
}
