

const APIURL = 'http://localhost:3001/api'
const getReplies = async (id) => {
    const url = APIURL + `/getReplies/${id}`;
    try{
        const res = await fetch(url,{
          method: "GET"}
          );
        if(res.ok){
            const replies = await res.json();
          
            return replies;
        } else {
            const text = await res.text();

            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
      
  }


  const addReplies = async (replies, id) => {
    const url = APIURL +  `/addReply`;
    try{
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({replies: replies, id: id})}
          );
        if(res.ok){
            const ok = await res.json();
            return ok;
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
            
            return posts;
        } else {
            const text = await res.text();

            throw new TypeError(text);
        }
      }catch(ex){
        throw ex;
      }
      
  }

  
const deletePost = async(id) => {
  try{
    const response = await fetch(APIURL+ `/deletePost/${id}`, {
      method: 'DELETE'
    });
    if (response.ok)
      return true;
  } catch(ex){
    throw ex;
  }
}

export  {getReplies, addReplies, getPosts, deletePost}