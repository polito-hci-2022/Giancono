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
import PlantCard from './Components/Plants/PlantCard';

const APIURL = 'http://localhost:3001/api';

function App() {

  const[up, setUP] = useState();
  const[p, setP] = useState();
  const[posts, setPosts] = useState();
  const[pid, setPID] = useState();
  const[upid, setUPID] = useState(); // per capire se una pianta è già in My Plants


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

  const getPID = async (id) => {
    const url = APIURL + `/getPN/` + id;
    try{
        const res = await fetch(url);
        if(res.ok){
            const plant = await res.json();
            setPID(plant);
            return plant;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
  }

  const getUPID = async (id) => {
    const url = APIURL + `/getUPN/` + id;
    try{
        const res = await fetch(url);
        if(res.ok){
            const plant = await res.json();
            setUPID(plant);
            return plant;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
  }

  const deletePID = async (id) => {
    const url = APIURL + `/deletePN/` + id;
    try {
      const res = await fetch(url, { method: 'DELETE' });
      if (res.ok) {
          const text = await res.text();
          return text;
      } else {
          const text = await res.text();
          throw new TypeError(text);
      }
    } catch (ex) {
      throw ex;
    }
  }  

  const addP = async (name,id,photo) => {
    const url = APIURL + '/addPlant';
    try{
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name:name, id: id, photo: photo})}
          );
        if(res.ok){
            const plant = await res.json();
            return plant;
        } else {
            const text = await res.text();
            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
  }

  const updateUPlant = async (id, w, r, f) => {
    const url = APIURL + `/updatePlant`;
    try{
        const res = await fetch(url,{
          method: "PUT", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id: id, w: w, r: r, f: f})
        },
          );
        if(res.ok){
            const upl = await res.json();
            getUPlants();
            return upl;
        } else {
            const text = await res.text();

            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
      
  }

  const getPosts = async () => {
    const url = APIURL + `/getthreads`;
    try{
        const res = await fetch(url,{
          method: "GET"}
          );
        if(res.ok){
            const posts = await res.json();
            setPosts(posts)
            return posts;
        } else {
            const text = await res.text();

            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
      
  }
  
  const handleAddPost = async (post) => {
    const url = APIURL + '/createthread';
    console.log(post)
    try{
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title: post.title, category:post.category, author:post.author, body:post.body}),}
          );
        if(res.ok){
            const posts = await res.json();
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
        <Route path='/' element={<Homepage up={up}/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/suggestions' element={<Suggestions getUP={getUPlants} up={up} getUPID={getUPID} setPID={setPID}/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/helpmyplant' element={<HelpMyPlant posts={posts} getPosts={getPosts}/>} />
        <Route path='/newpost' element={<NewPost handleAddPost={handleAddPost}/>} />
        <Route path='/myplants' element={<MyPlants deletePID={deletePID} UPL={updateUPlant} getUP={getUPlants} userPlants={up} pid={pid} getPID={getPID}/>}></Route>
        <Route path='/plantinfo' element={<MyPlants getUP={getUPlants} getPID={getPID} pi={true} pid={pid} deletePID={deletePID}/>}/> 
        <Route path='/plantinfo1' element={<AP pi={true} getUPID={getUPID} upid={upid} addP={addP} deletePID={deletePID}/>}/>
        <Route path='/plantinfo2' element={<PlantCard pi={true} getUPID={getUPID} upid={upid} addP={addP} deletePID={deletePID}/>}/>
        <Route path='/addplant' element={<AP getP={getPlants} plants={p} getUPID={getUPID} upid={upid}/>}/>
        <Route path='/added' element={<AP add={1}/>}/>
        <Route path='/added1' element={<PlantCard addP={addP} add={2}/>}/>
        <Route path='/undone' element={<MyPlants del={true}/>}/>
        <Route path='/undone1' element={<AP del={true}/>}/>
        <Route path='/undone2' element={<PlantCard del={true}/>}/>
        <Route path='/recognize' element={<Recognize/>}/>
        <Route path='/recognize/plant' element={<RecognizedPlant getUPID={getUPID} upid={upid} setPID={setPID}/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/feedback/sent' element={<FeedbackSent/>}/>
        <Route path='/forum/posted' element={<ForumPosted/>}/>
        <Route path='/forum/post/:id' element={<Post post={posts}/>}/>
        <Route path='/cat' element={<AP getP={getPlants} getUPID={getUPID} upid={upid} addP={addP} plants={p} cat={1}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
