import { TimeFrames } from "types/types";

const ENDPOINT_URL = "https://wookie.codesubmit.io/time-tracking";
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
}

const fetchData = async() =>{
  
  const response = await fetch(ENDPOINT_URL,options);
  return response.json();
}





export default fetchData;