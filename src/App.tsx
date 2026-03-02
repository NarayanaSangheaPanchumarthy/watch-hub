import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContentDetail from "./pages/ContentDetail";
import ContentListingPage from "./pages/ContentListingPage";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AuthorPage from "./pages/AuthorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/movies" element={<ContentListingPage type="movie" />} />
          <Route path="/shows" element={<ContentListingPage type="tv" />} />
          <Route path="/title/:id" element={<ContentDetail />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/author/:id" element={<AuthorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
