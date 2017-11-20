
// const initialState = {message:"ELLO"}

// export default function peopleReducer (state = initialState, action) {
//   switch (action.type) {
//     case 'SET_MESSAGE':
//       return {
//         message: action.payload 
//       }

//     default:
//       return state
//   }
// }


export default (state = 0, action)=> {
  switch (action.type) {
  case 'INCREMENT':
    return {message: action.payload + 1}
  case 'DECREMENT':
    return {message: action.payload - 1}
    case 'SET_MESSAGE':
      return {
        message: action.payload 
      }
  default:
    return {message:state}
  }
}