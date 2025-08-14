import React from "react";

export class ErrorBoundary extends React.Component {

    // set up with constructor 
    constructor(props) {
        super(props),
            this.state = {
                hasError: false,
                error: null,
                errorInfo: null
            };
    }

    static getDerivedStateFromError(error) {
        console.log("Error", error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

        // Log error to service (in real app)
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
    const NODE_ENV = "development";
    if (this.state.hasError) {
      return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-7xl text-indigo-600">500</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
             Opp! Something went Wrong
          </h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={() => window.location.href = '/'}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </button>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
      );
    }
       return this.props.children;
  }
}

// 404 Not Found Component
export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="text-8xl font-bold text-purple-600 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
          <p className="text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => window.history.back()}
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

// Network Error Component
export const NetworkError = ({ onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-3">
        <WifiOff className="w-5 h-5 text-red-500" />
        <div className="flex-1">
          <h3 className="font-medium text-red-800">Network Error</h3>
          <p className="text-sm text-red-600">Please check your internet connection</p>
        </div>
        <button
          onClick={onRetry}
          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

// Loading Error Component
export const  LoadingError = ({ message, onRetry }) => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-500" />
        <div className="flex-1">
          <h3 className="font-medium text-yellow-800">Loading Error</h3>
          <p className="text-sm text-yellow-600">{message}</p>
        </div>
        <button
          onClick={onRetry}
          className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700 transition-colors"
        >
          Retry
        </button>
      </div>
    </div>
  );
};
