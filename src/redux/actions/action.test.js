import * as actions from './action'

describe('ACTIONS', () => {
   it('should create an action with correct type', () => {
      const expectedAction = {
              type: 'GET_DATA'
             }
      expect(actions.getData()).toEqual(expectedAction)
  })
})