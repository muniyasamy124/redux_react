import React from 'react'
import EntryUser from './EntryUser'
import EntryView from './EntryView'
import {store} from './store'
import { Provider } from 'react-redux';
function App() {
  return (

    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 pt-[50px] m-auto">
      <EntryUser />
      <EntryView />
      </div>
    </Provider>



  )
}

export default App