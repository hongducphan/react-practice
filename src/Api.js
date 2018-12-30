import axios from "axios";

class Api {
  static getData() {
    let data = [];
    axios.get("http://localhost:5000/getData").then(res => {
      if (res.status === 200) {
        data = res.data;
      }
    });
    return data;
  }
}

export default Api;
