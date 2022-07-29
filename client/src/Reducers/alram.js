import * as typeAlarm from "../contants/alram";
import resultRrandomnumber from "../commons/Randomnumber";
var initiaState = {
  job: {
    id: null,
    text: "",
    time: {
      hour: "",
      minute: "",
      second: "",
    },
    timeselected: "selected",
    music: "",
  },
  jobs: [],
};
function counterReducer(state = initiaState, action) {
  switch (action.type) {
    case typeAlarm.CHANGE_JOB_ALARM:
      const { value, name } = action.payload;
      return {
        ...state,
        job: { ...state.job, [name]: value },
      };
    case typeAlarm.CHANGE_SELECT_JOB_ALARM:
      const { payload } = action;
      return {
        ...state,
        job: { ...state.job, timeselected: payload },
      };
    case typeAlarm.ADD_JOB_ALARM:
      if (state.job.id || state.job.id === 0) {
        state.jobs[state.job.id] = state.job;
      } else {
        state.job.id = resultRrandomnumber();
        state.jobs.push(state.job);
      }
      state.jobs = [...state.jobs];
      state.job = {
        id: null,
        text: "",
        time: {
          hour: "",
          minute: "",
          second: "",
        },
        timeselected: "selected",
        music: "",
      };
      return { ...state };
    case typeAlarm.DETELE_JOB_ALARM:
      const { id } = action;
      state.jobs.splice(id, 1);
      state.jobs = [...state.jobs];
      return state;
    case typeAlarm.EDIT_JOB_ALARM:
      const idEdit = action.id;
      state.job = state.jobs[idEdit];
      return state;
    case typeAlarm.SET_PAGE:
      localStorage.setItem("Data-Alam", JSON.stringify(state));
      return state;
    case typeAlarm.STARE_PAGE:
      const Data_Alam = JSON.parse(localStorage.getItem("Data-Alam")) || state;
      return Data_Alam;
    case typeAlarm.RESET_JOB:
      state.job = {
        id: null,
        text: "",
        time: {
          hour: "",
          minute: "",
          second: "",
        },
        timeselected: "selected",
        music: "",
      };
      return { ...state };
    default:
      return state;
  }
}
export default counterReducer;
