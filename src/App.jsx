import React from 'react'
import EntryUser from './EntryUser'
import EntryView from './EntryView'
import {store} from './store'
import { Provider } from 'react-redux';
function App() {
  return (

    <Provider store={store}>
      <EntryUser />
      <EntryView />
    </Provider>



  )
}

export default App