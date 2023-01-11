class dao{
constructor(db) {
        this.db = db;
      }

addPlantUser(){
    return new Promise((resolve, reject)=>{
      const sql = 'INSERT INTO userPlant(idUser, idPlant, watered, repotted, phertilized) VALUES(?, ?, ?, ?, ?)';;
      this.db.run(sql, [2, 2, 2, 2, 2], function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(true);
        }
      });
    })
  }
}

getUserPlants = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM userPlant';
    db.all(sql, [], (err, rows) => {
      if(err)
        reject(err);
      else {
        const answer = rows.map(row => {return {"idPlant": row.idPlant, "photo": row.photo, "watered": row.watered, "repotted": row.repotted, "phertilized": row.phertilized}});
        resolve(answer);
      }
    });
  });
}

module.exports = dao;