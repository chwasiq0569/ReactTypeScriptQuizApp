export function changeToResult(payload) {
  return { 
    type: 'RESULT_VIEW', 
    payload: payload 
  }
}
export function changeToCanvas(payload) {
  return { 
    type: 'CANVAS_VIEW', 
    payload: payload 
  }
}