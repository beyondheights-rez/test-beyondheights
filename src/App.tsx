import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Idea from './pages/Idea';
import Platform from './pages/Platform';
import Partner from './pages/Partner';
import Moneyball from './pages/Moneyball';
import Story from './pages/Story';
import Lab from './pages/Lab';
import Blueprint from './pages/Blueprint';
import About from './pages/About';
import Donate from './pages/Donate';
import WhyItMatters from './pages/WhyItMatters';
import Approach from './pages/Approach';
import Join from './pages/Join';
import WhoWeServe from './pages/WhoWeServe';
import Rithvik from './pages/Rithvik';
import Impact from './pages/Impact';
import Science from './pages/Science';
import Athletics from './pages/Athletics';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-bg text-brand-ink selection:bg-brand-ink selection:text-brand-bg scroll-smooth">
        {/* Sticky Header */}
        <Header />
        
        {/* Main Content (Single Page Scroll Layout) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Impact />} />
            <Route path="/idea" element={<Idea />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/moneyball" element={<Moneyball />} />
            <Route path="/story" element={<Story />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/blueprint" element={<Blueprint />} />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/why-it-matters" element={<WhyItMatters />} />
            <Route path="/our-approach" element={<Approach />} />
            <Route path="/join" element={<Join />} />
            <Route path="/support" element={<Support />} />
            <Route path="/who-we-serve" element={<WhoWeServe />} />
            <Route path="/rithvik" element={<Rithvik />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/science" element={<Science />} />
            <Route path="/marathon" element={<Athletics />} />
            <Route path="/athletics" element={<Athletics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund-policy" element={<Refund />} />
            {/* Fallback back to Impact */}
            <Route path="*" element={<Impact />} />
          </Routes>
        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
