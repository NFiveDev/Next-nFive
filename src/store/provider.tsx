import {Provider} from 'react-redux';
import store from './store';

type ReduxStoreProviderProps = {
  children: React.ReactNode
}

export default function ReduxStoreProvider(props: ReduxStoreProviderProps) {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}