
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import SurveyAudience from "./pages/SurveyAudience";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/survey-audience" element={<SurveyAudience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

