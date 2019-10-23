import { put, takeLatest } from 'redux-saga/effects';
import { fetchData, actionWatcher } from './index'
 describe('SAGAS', () => {
   it('should dispatch action "GET_DATA" ', () => {
     const generator = actionWatcher();
     expect(generator.next().value)
       .toEqual(takeLatest('GET_DATA', fetchData));
     expect(generator.next().done).toBeTruthy();
   })
   it('should dispatch action "DATA_RECEIVED" with result from fetch Workflows API', () => {
      const mockResponse =  JSON.stringify([{ 'workflows': 'Workflow Data'        }]); 
      const generator = fetchData();
      generator.next();
      expect(generator.next(mockResponse).value)
       .toEqual(put({type:"DATA_RECEIVED", data: JSON.stringify([{ 'workflows': 'Workflow Data'}])}))
      expect(generator.next().done).toBeTruthy();
   })
})