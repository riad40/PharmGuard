import { AppNavigator } from "./src/AppNavigator"
import { Provider } from "react-redux"
import store from "./src/state/store"

const App = (): JSX.Element => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}

export default App
