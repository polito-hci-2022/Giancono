class dao{
constructor(db) {
        this.db = db;
      }

      /*
addPlantUser(idPlant, fertilized){
    return new Promise((resolve, reject)=>{
      const sql = 'INSERT INTO userPlant(idUser, idPlant, watered, repotted, phertilized) VALUES(1, ?, 0, 0, ?)';;
      this.db.run(sql, [idPlant, fertilized], function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(true);
        }
      });
    })
  }
}*/

getUserPlants = (user) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM userPlant WHERE idUser = ?';
    this.db.all(sql, [user], (err, rows) => {
      if(err)
      {
        console.log(err);
        reject(err);
      }
      else {
        const answer = rows.map(row => {return {'idPlant': row.idPlant, 'photo': row.photo, 'watered': row.watered, 'repotted': row.repotted, 'fertilized': row.fertilized}});
        resolve(answer);
      }
    });
  });
}

getPlants = (user) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM plant';
    this.db.all(sql, [user], (err, rows) => {
      if(err)
      {
        console.log(err);
        reject(err);
      }
      else {
        const answer = rows.map(row => {return {'id': row.id, 'scientificname': row.scientificname, 'description': row.description, 'photo': row.photo, 'waterNeed': row.waterNeed, 'sunNeed': row.sunNeed, 'humidityNeed': row.humidityNeed, 'soilNeed': row.soilNeed, 'vaseNeed': row.vaseNeed, 'fertilizerNeed': row.fertilizerNeed, 'diseases': row.diseases, 'pests': row.pests, 'category': row.category}});
        resolve(answer);
      }
    });
  });
}

}

module.exports = dao;