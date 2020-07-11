import React from 'react';
import { useEffect } from 'react';

function withTimeout(WrappedComponent) {
    let timeoutId;

    return () => {

        const initializeTimeout = () => {
            timeoutId = null;
        }

        const setTimeout = () => {
            this.timeoutId = (setTimeout.apply(null, arguments));
        }

        const clearTimeout = () => {
            clearTimeout(timeoutId)
        }

        useEffect(() => {
            initializeTimeout();
            return () => clearTimeout()
        })

        return (
            <WrappedComponent 
              timeout={timeoutId} 
              setTimeout={setTimeout} 
              clearTimeout={clearTimeout} 
              { ...this.props } />
        )

    }
}

// const Timeout = Composition => class _Timeout extends Component {
//     constructor(props) {
//       super(props);
//     }

//     componentWillMount () {
//       this.timeouts = [];
//     }

//     setTimeout () {
//       this.timeout = (setTimeout.apply(null, arguments));
//     }

//     clearTimeouts () {
//       this.timeouts.forEach(clearTimeout);
//     }

//     componentWillUnmount () {
//       this.clearTimeouts();
//     }

//     render () {
//       const { timeouts, setTimeout, clearTimeouts } = this;

//       return <Composition 
//         timeouts={timeouts} 
//         setTimeout={setTimeout} 
//         clearTimeouts={clearTimeouts} 
//         { ...this.props } />
//     }
// }

export default withTimeout;