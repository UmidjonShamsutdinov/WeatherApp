const initialState = {
    data : []
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
      case "WEATHER":
        return {data: action.data}
      default:
        return state
  }
}


export {reducer}