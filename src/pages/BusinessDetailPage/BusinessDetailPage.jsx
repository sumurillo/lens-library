import React, { useState, useEffect } from 'react';

export default function myBusiness() {
  const [myBusiness, setMyBusiness] = useState(null);

  useEffect(() => {
    async function fetchBusiness() {
      try {
        const response = await fetch('/api/my-data-collection');
        const data = await response.json();
        setMyData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBusiness();
  }, []);

  if (!myBusiness) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{myBusiness.name}</h1>
      <p>{myBusiness.description}</p>
      {/* Render other details of myData as desired */}
    </div>
  );
}
