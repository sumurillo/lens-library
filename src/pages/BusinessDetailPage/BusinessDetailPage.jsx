import React, { useState, useEffect } from 'react';

export default function oneBusiness() {
  const [oneBusiness, setOneBusiness] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await fetch('/api/business/:id');
        const business = await response.json();
        setOneBusiness(business);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBusiness();
  }, []);

  if (!oneBusiness) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{oneBusiness.name}</h1>
      <h3>{oneBusiness.location}</h3>
      <h3>{oneBusiness.price}</h3>
      <h3>{oneBusiness.services}</h3>
      <h3>{oneBusiness.portfolio}</h3>
    </div>
  );
}
