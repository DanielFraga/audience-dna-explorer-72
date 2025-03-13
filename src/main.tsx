
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import SurveyAudience from "./pages/SurveyAudience";
import Settings from "./pages/Settings";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
