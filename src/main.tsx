
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Create root with explicit non-null assertion for the element
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

// Add console log to help debug
console.log('Rendering app to root element');
console.log('Current URL:', window.location.href);

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

try {
  root.render(<App />);
  console.log('App rendered successfully');
} catch (error) {
  console.error('Failed to render app:', error);
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; padding: 20px;">
      <h1 style="color: #e11d48; font-size: 24px; margin-bottom: 16px;">Application Error</h1>
      <p style="margin-bottom: 16px;">There was an error loading the application. Please refresh the page.</p>
      <button 
        onclick="window.location.reload()" 
        style="padding: 8px 16px; background-color: #2563eb; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Refresh Page
      </button>
      <p style="margin-top: 16px; font-size: 14px; color: #6b7280;">Error details have been logged to the console.</p>
    </div>
  `;
  rootElement.appendChild(errorDiv);
}
