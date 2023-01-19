import { NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'

import { Routes } from './routes'
import { THEME } from './theme'

import store from './store'

export default function App(){
  return(
    <NativeBaseProvider theme={THEME}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </NativeBaseProvider>
  )
}
