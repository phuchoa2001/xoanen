import * as typeAlarm from "../contants/alram";
export const Addjobalarm = () => {
  return {
    type: typeAlarm.ADD_JOB_ALARM,
  };
};
export const ChangeJobalarm = (payload) => {
  return {
    type: typeAlarm.CHANGE_JOB_ALARM,
    payload,
  };
};
export const ChangeSelectJobalarm = (payload) => {
  return {
    type: typeAlarm.CHANGE_SELECT_JOB_ALARM,
    payload,
  };
};
export const detelejobalarm = (id) => {
  return {
    type: typeAlarm.DETELE_JOB_ALARM,
    id,
  };
};
export const etionjobalarm = (id) => {
  return {
    type: typeAlarm.EDIT_JOB_ALARM,
    id,
  };
};
export const resetJob = () => {
  return {
    type: typeAlarm.RESET_JOB,
  };
};
export const setPage = () => {
  return {
    type: typeAlarm.SET_PAGE,
  };
};
export const startPage = () => {
  return {
    type: typeAlarm.STARE_PAGE,
  };
};
