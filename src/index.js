import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Mercury from './pages/Mercury'
import Venus from './pages/Venus'
import Earth from './pages/Earth'
import Mars from './pages/Mars'
import Jupiter from './pages/Jupiter'
import Saturn from './pages/Saturn'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import reducers from './reducers'
const temp = module
if (temp.hot) {
    temp.hot.accept()
}

class App extends React.PureComponent {
    render() {
        const middleware = applyMiddleware(promise, thunk)
        return (
            <Provider store={createStore(reducers, middleware)}>
                <Router>
                    <div>
                        <Home />
                        <Switch>
                            <Route path='/Mercury' component={Mercury} />
                            <Route path='/Venus' component={Venus} />
                            <Route path='/Earth' component={Earth} />
                            <Route path='/Mars' component={Mars} />
                            <Route path='/Jupiter' component={Jupiter} />
                            <Route path='/Saturn' component={Saturn} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
