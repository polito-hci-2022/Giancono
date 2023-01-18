import {BrowserRouter, Routes, Route} from 'react-router-dom';


import Homepage from './Components/General/Homepage';
import Suggestions from './Components/General/Suggestions';
import Test from './Components/Test';
import Forum from './Components/General/Forum';
import HelpMyPlant from './Components/General/HelpMyPlant';
import NewPost from './Components/General/NewPost';
import MyPlants from './Components/Plants/MyPlants';
import Recognize from './Components/General/Recognize';
import RecognizedPlant from './Components/General/RecognizedPlant';
import AP from './Components/Plants/AP';
import Feedback from './Components/Feedback/Feedback';
import FeedbackSent from './Components/Feedback/Sent';
import ForumPosted from './Components/Forum/Posted';
import Post from './Components/Forum/Post';
import { useState, useEffect } from 'react';

const APIURL = 'http://localhost:3001/api';

function App() {

  const[up, setUP] = useState();
  const[p, setP] = useState();
  const[posts, setPosts] = useState();


  const getUPlants = async () =>{
    const url = APIURL + `/getUP/1`;
    try{
        const res = await fetch(url);
        if(res.ok){
            const plants = await res.json();
            plants.sort((c1, c2)=>{return c1.Name > c2.Name});
            setUP(plants);
            return plants;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      } 
  }

  const getPlants = async () => {
    const url = APIURL + `/getP`;
    try{
        const res = await fetch(url);
        if(res.ok){
            const plants = await res.json();
            plants.sort((c1, c2)=>{return c1.Name > c2.Name});
            setP(plants);
            return plants;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
  }

  const getPosts = async () => {
    const url = APIURL + `/api/getThreads/:helpmyplants`;
    try{
        const res = await fetch(url);
        if(res.ok){
            const posts = await res.json();
            setPosts(posts);
            return posts;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
  }

  useEffect(() => {
    getUPlants();
    getPlants();
    getPosts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/suggestions' element={<Suggestions/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/helpmyplant' element={<HelpMyPlant/>} posts={posts}/>
        <Route path='/newpost' element={<NewPost/>}/>
        <Route path='/myplants' element={<MyPlants userPlants={up}/>}></Route>
        <Route path='/plantinfo' element={<MyPlants pi={true}/>}/>
        <Route path='/plantinfo1' element={<AP pi={true}/>}/>
        <Route path='/addplant' element={<AP plants={p}/>}/>
        <Route path='/added' element={<MyPlants add={true}/>}/>
        <Route path='/undone' element={<MyPlants del={true}/>}/>
        <Route path='/recognize' element={<Recognize/>}/>
        <Route path='/recognize/plant' element={<RecognizedPlant/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/feedback/sent' element={<FeedbackSent/>}/>
        <Route path='/forum/posted' element={<ForumPosted/>}/>
        <Route path='/forum/post' element={<Post/>}/>
        <Route path='/cat' element={<AP plants={p} cat={1}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
