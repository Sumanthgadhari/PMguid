
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
root.render(<App />);
