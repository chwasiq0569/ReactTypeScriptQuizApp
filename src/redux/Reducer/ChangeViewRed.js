const initialState = {
  view: "canvas"
};

export function changeViewReducer(state = initialState, action) {
  switch(action.type) {
    case 'RESULT_VIEW':
      return { view: "results" };
    case 'CANVAS_VIEW':
      return { view: "canvas" };
    default:
      return state;
  }
}