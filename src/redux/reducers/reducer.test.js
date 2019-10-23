import reducer from "./index";
describe ('REDUCER', () => {
   it('should return the initial state', () =>{
     expect(reducer(undefined, {})).toEqual({})
    })
   it('should handle "GET_DATA" action', () => {
    expect(reducer({}, { type: 'GET_DATA' })).
      toEqual({ loading: true })
   })
   it('should handle "DATA_RECEIVED" action', () => {
      const mockData = [{
        "author": "Analysis by Stephen Collinson, CNN",
        "title": "Mueller starts tzzle in most signimove yet",
        "description": "Silent for so long"
       }];
     expect(reducer({}, { type: "DATA_RECEIVED", data: mockData }))
       .toEqual({ workflows: mockData, loading: false })
   })
})