import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchData() {
  const json = yield fetch('https://5dae2e5fc7e88c0014aa32df.mockapi.io/api/workflows')
        .then(response => response.json() );    
  yield put({ type: "DATA_RECEIVED", data: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_DATA', fetchData)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}