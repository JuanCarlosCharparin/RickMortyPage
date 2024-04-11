import React, { useState, useEffect } from 'react';

function NasaApod() {
  const [apodData, setApodData] = useState(null);
  const API_KEY = 'tu_clave_de_api_de_la_nasa';

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(apodData => setApodData(apodData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="nasa-apod">
      
        <>{console.log(apodData)}
          <h2>{apodData.title}</h2>
          <img src={apodData.url} alt={apodData.title} />
          <p>{apodData.explanation}</p>
        </>
      
    </div>
  );
}

export default NasaApod;
