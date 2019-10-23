import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchDocuments() {
  const json = yield fetch('https://5dae2e5fc7e88c0014aa32df.mockapi.io/api/workflows')
        .then(response => response.json() );    
  yield put({ type: "DOCUMENTS_RECEIVED", data: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_DOCUMENTS', fetchDocuments)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}