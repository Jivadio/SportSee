import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <AppLayout>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Toaster position="bottom-right" reverseOrder={false} />
        </QueryClientProvider>
      </AppLayout>
    </Router>
  );
}

export default App;
