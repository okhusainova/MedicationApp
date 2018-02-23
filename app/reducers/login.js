import * as types from '../config/actionTypes';

const initialState = {
  count: 0
};

export default function login(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN:
      return {
        count: state.count + 1
    };
    default:
      return state;
  }
}




// let data = {
// 	      email: this.state.email,
// 	      password: this.state.password
//     	}

// 	    fetch('https://mywebsite.com/endpoint/', {  
// 	      method: 'POST',
// 	      headers: {
// 	        'Accept': 'application/json',
// 	        'Content-Type': 'application/json',
// 	      },
// 	      body: JSON.stringify({data})
// 	    })
// 	    .then(function(response){ 
// 	      console.log(response)
// 	     return response.json();   
// 	    })
// 	    .then(function(data){ 
// 	      console.log(data)
// 	    });
//       };