import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    componentDidCatch(error) {
        console.log(error);
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </>
            );
        }
        return this.props.childeren;
    }
}
export default ErrorBoundary;
