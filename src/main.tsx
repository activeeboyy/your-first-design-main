import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initAutomaticWhatsAppTracking } from './utils/analytics';

// Initialize automatic WhatsApp link click tracking across the whole site
initAutomaticWhatsAppTracking();

createRoot(document.getElementById('root')!).render(<App />);
