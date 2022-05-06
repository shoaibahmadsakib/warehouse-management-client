import { useEffect, useState } from "react";

const useGetinfo =()=>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
      // const email = user?.email;
      fetch(`https://still-stream-74299.herokuapp.com/userinfo`)
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
    return [users,setUsers]
}
export default useGetinfo;