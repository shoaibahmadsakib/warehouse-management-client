import axios from "axios";

const { useState, useEffect } = require("react")

const useToken = user =>{
    const [token,setToken] =useState("");
    useEffect(()=>{
      const getToken =async()=>{
        
          const email = user?.user?.accessToken;
          if(email){

              const { data } = await axios.post("https://still-stream-74299.herokuapp.com/login", { email });
              setToken(data.accessToken);
              localStorage.setItem('accesstoken',data.accessToken)
          }
      }
      getToken();
    },[user])
    return [token]
}
export default useToken;