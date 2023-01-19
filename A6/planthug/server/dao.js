class dao{
constructor(db) {
        this.db = db;
      }

      
addPlantUser(user, plant){
    return new Promise((resolve, reject)=>{
      const sql = 'INSERT INTO userPlant(idPlant, watered, repotted, phertilized, idUser) VALUES(?, 0, 0, 0, ?)';;
      this.db.run(sql, [plant, user], function (err) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(true);
        }
      });
    })
  }


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
        const answer = rows.map(row => {return {'id': row.id, 'name': row.scientificName, 'description': row.description, 'photo': row.photo, 'waterNeed': row.waterNeed, 'sunNeed': row.sunNeed, 'humidityNeed': row.humidityNeed, 'soilNeed': row.soilNeed, 'vaseNeed': row.vaseNeed, 'fertilizerNeed': row.fertilizerNeed, 'diseases': row.diseases, 'pests': row.pests, 'category': row.category}});
        resolve(answer);
      }
    });
  });
}


getThreads = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM forum';
    this.db.all(sql, [], (err, rows) => {
      if(err)
      {
        console.log(err);
        reject(err);
      }
      else {
        const threads = rows.map(row => {return {'title':row.title, 'id': row.id, 'category': row.category, 'body': row.body, 'replies': row.replies, 'author': row.userId}});
        resolve(threads);
      }
    });
  });
}

getThreadsCategory = (category) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM forum where category = ?';
    this.db.all(sql, [category], (err, rows) => {
      if(err)
      {
        console.log(err);
        reject(err);
      }
      else {
        const threads = rows.map(row => {return {'id': row.idThread, 'body': row.body, 'replies': row.replies, 'userId': row.idUser, 'title': row.title}});
        resolve(threads);
      }
    });
  });
}

createThread(user, title, category, body){
  return new Promise((resolve, reject)=>{
    const sql = 'INSERT INTO forum(title, category, body, userId, replies) VALUES(?, ?, ?, ?, "[]")';
    this.db.run(sql, [title, category, body, user], function (err) {
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