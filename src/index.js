import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Mars from './pages/Mars'
const temp = module
if (temp.hot) {
    temp.hot.accept()
}

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <div>
                    <Mars />
                    {/* <Switch>
                            <Route path='/weMessage' component={Mars} />
                        </Switch> */}
                </div>
            </Router>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
