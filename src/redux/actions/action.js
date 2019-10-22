export const ADD_PARAMS ='ADD_PARAMS'

export function addParams(title, content) {
    return { type: ADD_PARAMS, title: title, content: content };
  }