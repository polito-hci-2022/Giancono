import Riddle from "./Riddle";
const SERVER_URL = 'http://localhost:3001';

////////////////////////////////////////////////////////////// RIDDLES

const getAllRiddles = async () => {
  const response = await fetch(SERVER_URL + '/api/riddles');
  const riddlesJson = await response.json();
  if(response.ok) {
    return riddlesJson.map(rd => new Riddle(rd.creatorid, rd.questionid, rd.question, rd.difficulty, rd.duration, rd.response, rd.hint1, rd.hint2, rd.open, rd.winner, rd.time));
  }
  else
    throw riddlesJson;
};

const getAnswer = async () => {
  const response = await fetch(SERVER_URL + '/api/answer', {
    credentials: 'include',
  });
  const answerJson = await response.json();
  if(response.ok) {
    return answerJson.map(row => {return {"creatorid": row.creatorid, "questionid": row.questionid, "userid": row.userid, "answer": row.answer}});
  }
  else
    throw answerJson;
};

const getAnswers = async () => {
  const response = await fetch(SERVER_URL + '/api/answers');
  const answerJson = await response.json();
  if(response.ok) {
    return answerJson.map(row => {return {"creatorid": row.creatorid, "questionid": row.questionid, "userid": row.userid, "answer": row.answer}});
  }
  else
    throw answerJson;
};

const putTime = async(timestamp,creatorid,questionid) => {
  const response = await fetch(SERVER_URL + '/api/time', {
    method: 'PUT',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"timestamp": timestamp, "creatorid": creatorid, "questionid": questionid})
  });

  if(!response.ok){
    const errMessage = await response.json();
    throw errMessage;
  }
  else return response.status;
}

const closeRiddle = async(creatorid,questionid) => {
  const response = await fetch(SERVER_URL + '/api/close', {
    method: 'PUT',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"creatorid": creatorid, "questionid": questionid})
  });

  if(!response.ok){
    const errMessage = await response.json();
    throw errMessage;
  }
  else return response.status;
}

const addAnswer = async (creatorid,questionid,answer) => {
  const response = await fetch(SERVER_URL + '/api/answer', {
    method: 'POST',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"creatorid": creatorid, "questionid": questionid, "answer": answer})
  });

  if(!response.ok){
    const errMessage = await response.json();
    throw errMessage;
  }
  else return response.status;
}

const addRiddle = async (questionid,question,difficulty,duration,response,hint1,hint2) => {
    const res = await fetch(SERVER_URL + '/api/riddle', {
    method: 'POST',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"questionid": questionid,"question": question,"difficulty": difficulty,"duration": duration,"response": response,"hint1": hint1,"hint2": hint2})
  });

  if(!res.ok){
    const errMessage = await res.json();
    throw errMessage;
  }
  else return res.status;
}

////////////////////////////////////////////////////////////// USER

const logIn = async (credentials) => {
  const response = await fetch(SERVER_URL + '/api/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(credentials),
  });
  if(response.ok) {
    const user = await response.json();
    return user;
  }
  else {
    const errDetails = await response.tcst();
    throw errDetails;
  }
};

const getUserInfo = async () => {
  const response = await fetch(SERVER_URL + '/api/sessions/current', {
    credentials: 'include',
  });
  const user = await response.json();
  if (response.ok) {
    return user;
  } else {
    throw user;
  }
};

const getRanking = async () => {
  const response = await fetch(SERVER_URL + '/api/rank');
  const rankJson = await response.json();
  if(response.ok) {
    return rankJson.map(row => {return {"id": row.id, "username": row.username, "score": row.score, "rank": row.rank}});
  }
  else
    throw rankJson;
};

const putScore = async(score,question) => {
  const response = await fetch(SERVER_URL + '/api/score', {
    method: 'PUT',
    credentials: 'include',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({"score": score,"question": question})
  });

  if(!response.ok){
    const errMessage = await response.json();
    throw errMessage;
  }
  else return response.status;
}

const logOut = async() => {
  const response = await fetch(SERVER_URL + '/api/sessions/current', {
    method: 'DELETE',
    credentials: 'include'
  });
  if (response.ok)
    return null;
}

const API = {logIn, getUserInfo, logOut, getAllRiddles, getAnswer, addAnswer, addRiddle, getRanking, getAnswers, putTime, putScore, closeRiddle};
export default API;