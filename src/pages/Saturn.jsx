import React, { Component, lazy, Suspense } from 'react'

const LazyTest1 = lazy(() => import('./Earth.jsx'))
const LazyTest2 = lazy(() => import('./Mars.jsx'))

class App extends Component {
    fallback = () => {
        return <div>Loading...</div>
    }

    render() {
        return (
            <div>
                <Suspense fallback={this.fallback()}>
                    <LazyTest1 />
                    <LazyTest2 />
                </Suspense>
            </div>
        )
    }
}

export default App
