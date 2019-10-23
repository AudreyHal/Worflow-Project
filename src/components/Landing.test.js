import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from "redux-mock-store";
import Landing from "./Landing";
import "../../setupEnzymeTest";
it('should render correctly <Landing>', () => {
  
  const mockStore = configureStore();
  const store = mockStore({
           workflows: [{
               name: "Approval Rating",
               stages: 3
            }],
          loading: false
        });
  const wrapper = mount(
          <Provider store={store}>
              <Landing/>
          </Provider>);
  expect(wrapper).toMatchSnapshot();
});