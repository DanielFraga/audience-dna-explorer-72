
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import SurveyAudience from "./pages/SurveyAudience";
import SavedAudiences from "./pages/SavedAudiences";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/survey-audience" element={<SurveyAudience />} />
          <Route path="/saved-audiences" element={<SavedAudiences />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
