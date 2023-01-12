const SERVER_URL = 'http://localhost:3001';

const getUP = async () => {
  const response = await fetch(SERVER_URL + '/api/getUP');
  const upJson = await response.json();
  if(response.ok) {
    return upJson.map(row => {return {'idPlant': row.idPlant, 'photo': row.photo, 'watered': row.watered, 'repotted': row.repotted, 'phertilized': row.phertilized}});
  }
  else
    throw riddlesJson;
};

const API = {getUP};
export default API;