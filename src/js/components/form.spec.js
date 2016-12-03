import React from 'react'
import ConnectedForm from './form'
import { Provider } from "react-redux"
import { mount } from 'enzyme'
// import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import { applyMiddleware, createStore, compose } from "redux"

import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

const middleware = applyMiddleware(thunk)
const mockStore = configureStore(middleware)


function setup() {
  const submit = jasmine.createSpy()
  const dataReducerState = {
      user: {firstname:'Test', lastname:'User'}
    }
  const reducers = combineReducers({
    dataReducer: function(state={}, action){ return dataReducerState},
    form: formReducer
  })
  const store = createStore(reducers, middleware);
  // const store = mockStore({
  //   dataReducer: 
  // })
  const enzymeWrapper = mount(<Provider store={store}><ConnectedForm onSubmit={submit} /></Provider>)
  return {
    store,
    enzymeWrapper,
    submit
  }
}

describe('test form with mock store', () => {
  describe('loaded data', () => {
    it('loads the data to the reducer', () => {
      const {enzymeWrapper, store} = setup()
      console.log(store.getState())
      const firstnameInput = enzymeWrapper.find('input').at(0)
      console.log(firstnameInput.props())
      expect(firstnameInput.props().value).toEqual('Test')
    })
    it('calls the submit function when you click the submit button', () => {
      const {enzymeWrapper, store, submit} = setup()
      const form = enzymeWrapper.find('form')
      const input1 = enzymeWrapper.find('input').at(0)
      input1.simulate('change', {target: {value:'New'}})
      const input2 = enzymeWrapper.find('input').at(1)
      input2.simulate('change', {target: {value:'Name'}})
      form.simulate('submit')
      expect(submit).toHaveBeenCalled()
      expect(submit.calls.argsFor(0)[0]).toEqual({firstname:'New', lastname:'Name'})
    })
  })
})