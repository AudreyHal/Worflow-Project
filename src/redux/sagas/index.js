import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchDocuments() {
  const json = yield fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json() );    
  yield put({ type: "DOCUMENTS_RECEIVED", documents: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_DOCUMENTS', fetchDocuments)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}