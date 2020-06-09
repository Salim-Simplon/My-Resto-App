import axios from "axios";

const initState = {
  foods:  []
};

const foodReducer = (state = initState, action) => {
  if(action.type === "PLATS_OK")
   {
    axios.get(`http://localhost:3000/foods`).then((res) => {
      const foods = res.data;
      this.setState({ foods });
    });
  }
};

export default foodReducer;
