
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import SurveyAudience from "./pages/SurveyAudience";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/survey-audience" element={<SurveyAudience />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
