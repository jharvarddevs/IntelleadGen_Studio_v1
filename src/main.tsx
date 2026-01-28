import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.tsx';
import './index.css';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Failed to find the root element');

  createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <App />
        <SpeedInsights />
      </HelmetProvider>
    </StrictMode>
  );
} catch (error) {
  console.error('Critical initialization error:', error);
  // Fail-safe: show a simple error message if the app fails to mount
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Something went wrong</h1><p>We are experiencing technical difficulties. Please try again later.</p></div>';
  }
}
