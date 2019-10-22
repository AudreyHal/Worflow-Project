
  const reducer = (state = {}, action) => {
    switch (action.type) {
       case 'GET_DOCUMENTS':
          return { ...state, loading: true };
        case 'DOCUMENTS_RECEIVED':
          return { ...state, documents: action.documents, loading: false }
       default:
          return state;
     }
  };
  export default reducer;