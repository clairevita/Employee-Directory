import axios from "axios";
// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
