
class Riddle {
    constructor(creatorid, questionid, question, difficulty, duration, response, hint1, hint2, open, winner, time) {
        this.creatorid = creatorid;
        this.questionid = questionid;
        this.question = question;
        this.difficulty = difficulty;
        this.duration = duration;
        this.response = response;
        this.hint1 = hint1;
        this.hint2 = hint2;
        this.open = open;
        this.winner = winner;
        this.time = time;
    }
}

export default Riddle;