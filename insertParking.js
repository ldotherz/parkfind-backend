const pool = require('./db');

const parkingData = [
  { lat: 45.803517, lon: 15.963383, name: 'Parking Cibona', zona: 1, slobodnaMjesta: 0 },
  { lat: 45.811966, lon: 16.041667, name: 'Kampus Borongaj', zona: 2, slobodnaMjesta: 39 },
  { lat: 45.80694, lon: 15.9769, name: 'I.B Mazuranic parking', zona: 3, slobodnaMjesta: 3 },
  { lat: 45.85553, lon: 15.806229, name: 'Parking Kodrmanova', zona: 4, slobodnaMjesta: 12 },
  { lat: 45.861539, lon: 15.990066, name: 'Terminal parking', zona: 2, slobodnaMjesta: 5 },
  { lat: 45.861679, lon: 15.993011, name: 'Crkva parking', zona: 4, slobodnaMjesta: 23 },
  { lat: 45.81161836, lon: 15.969338, name: 'Garaža Tuškanac', zona: 5, slobodnaMjesta: 350 },
  { lat: 45.814902, lon: 15.966929, name: 'Garaža Langov trg', zona: 5, slobodnaMjesta: 600 },
  { lat: 45.808247, lon: 15.9800942, name: 'Garaža Petrinjska', zona: 5, slobodnaMjesta: 377 },
  { lat: 45.802848, lon: 16.049526, name: 'City Centar East', zona: 7, slobodnaMjesta: 500 },
  { lat: 45.8130914, lon: 15.975674, name: 'Garaža Gorica', zona: 5, slobodnaMjesta: 500 },
  { lat: 45.808135, lon: 15.952828, name: 'Parkiralište Dom sportova', zona: 2, slobodnaMjesta: 150 },
  { lat: 45.7985269, lon: 15.94677, name: 'Parkiralište Heinzlova', zona: 3, slobodnaMjesta: 200 },
  { lat: 45.8271235, lon: 15.940768, name: 'City Centar Parking', zona: 3, slobodnaMjesta: 300 },
  { lat: 45.823398, lon: 15.981498, name: 'Parkiralište Palmotićeva', zona: 1, slobodnaMjesta: 50 },
  { lat: 45.7862439, lon: 15.97014, name: 'Parkiralište Jarun Sjever', zona: 1, slobodnaMjesta: 100 },
  { lat: 45.8105418, lon: 15.9534168, name: 'Parking Trg Francuske Republike', zona: 2, slobodnaMjesta: 85 },
  { lat: 45.797243, lon: 15.9631, name: 'King Cross Jankomir', zona: 4, slobodnaMjesta: 51 },
  { lat: 45.8132241, lon: 15.9831667, name: 'Garaža Importanne Galleria', zona: 5, slobodnaMjesta: 120 },
  { lat: 45.8074, lon: 15.9765, name: 'Parkiralište Gradski groblja', zona: 3, slobodnaMjesta: 25 },
  { lat: 45.8087602, lon: 15.7941, name: 'Parkiralište Srednja Škola Bana Josipa Jelačića', zona: 1, slobodnaMjesta: 60 },
  { lat: 45.8067021, lon: 15.96458, name: 'Garaža Branimir', zona: 5, slobodnaMjesta: 3 },
  { lat: 45.8146931, lon: 15.961638, name: 'Garaža Svetica', zona: 5, slobodnaMjesta: 150 },
  { lat: 45.7996076, lon: 15.944473, name: 'Parkiralište Trešnjevački trg', zona: 2, slobodnaMjesta: 30 },
  { lat: 45.777891, lon: 15.966296, name: 'Parkiralište Radoslava Cimermana', zona: 3, slobodnaMjesta: 70 },
  { lat: 45.80403, lon: 15.945384, name: 'Parkiralište Ericsson Nikola Tesla', zona: 6, slobodnaMjesta: 2 }
];

(async () => {
  for (const parking of parkingData) {
    await pool.query(
      'INSERT INTO parking (name, lat, lon, zona, slobodnaMjesta) VALUES ($1, $2, $3, $4, $5)',
      [parking.name, parking.lat, parking.lon, parking.zona, parking.slobodnaMjesta]
    );
  }

  console.log('✅ Parking podaci su uneseni u Neon bazu.');
  pool.end();
})();
