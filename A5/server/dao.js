class dao{
constructor(db) {
        this.db = db;
      }

connectPlantUser(){
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

module.exports = dao;