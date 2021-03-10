import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MessageWindow from './pages/messageWindow'
const temp = module
if (temp.hot) {
    temp.hot.accept()
}

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <MessageWindow />
                    {/* <Switch>
                            <Route path='/weMessage' component={Mars} />
                        </Switch> */}
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
