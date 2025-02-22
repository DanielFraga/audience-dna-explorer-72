
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import SurveyAudience from "./pages/SurveyAudience";
import SavedAudiences from "./pages/SavedAudiences";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/survey-audience" element={<SurveyAudience />} />
        <Route path="/saved-audiences" element={<SavedAudiences />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
