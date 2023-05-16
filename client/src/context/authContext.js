import {createContext} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) = {
    const [currentUser.setCurrentUser]=useState(JSON.parse(localStorage.getItem('user')|| null)
    
    const login = async(inputs)=>{

      const  res = await axios.post(
            "http://localhost:8800/api/auth/login",
            inputs
          );
    }
    
    
    );
}