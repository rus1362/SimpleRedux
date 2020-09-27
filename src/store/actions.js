import * as actions from './actionType';
export const GenericUpdater= (actions, value)=>{
  return(
  {
  type : actions,
  payload:{
    value
  }
})};
export const UpdateUsername= (value) =>({
  type : actions.Update_Username,
  payload:{
    value 
  }
});
export const UpdateBirthDay= value =>({
  type : actions.Update_BirthDay,
  payload:{
    value
  }
});
export const UpdateCountry= value =>({
  type : actions.Update_Country,
  payload:{
    value
  }
});
export const UpdateGender= value =>({
  type : actions.Update_Gender,
  payload:{
    value
  }
});