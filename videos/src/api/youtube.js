import axios from "axios";

const KEY = "AIzaSyCbXw-o4gw3vxtuK4s103TqY7gMcj9AvfE";

//We will pass in query when we make the axios request
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: `${KEY}`
  }
});
