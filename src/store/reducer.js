import * as actions from './actionType';
const initialState = {
      userName :'rasul',
      family :'heidari',
      birthday :'initial date',
      gender :'Male',
      country :'Iran'
};
const  reducer = (state= initialState,action)=>{
      console.log("log generic reducer")
      switch(action.type){
            case actions.Update_Username :{
                  console.log("Reachd in Reducer in switch")
                  return({
                              ...state,
                              userName : action.payload.value}
                  );
            }
            case actions.Update_Family :{
                  console.log("Reachd in Reducer in switch")
                  return({
                        ...state,
                        family : action.payload.value
                  }
            );
            }
            case actions.Update_BirthDay : {
                  console.log("Reachd in Reducer in switch",action.payload.value)
                  return({
                              ...state,
                              birthday : action.payload.value}
                  );
            }
            case actions.Update_Gender : {
                  console.log("Reachd in Reducer in switch")
                  return({
                              ...state,
                              gender : action.payload.value}
                  );
            }
            case actions.Update_Country :{
                  console.log("Reachd in Reducer in switch")
                  return({
                              ...state,
                              country : action.payload.value}
                  );
            }
            default : return state;
      }
}
export default reducer;
