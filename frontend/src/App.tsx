import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="container animate-fade-in" style={{ padding: '2rem 1.5rem' }}>
        <Routes>
          <Route path="/" element={
            <div>
              <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 600 }}>
                Next-Gen Garments.
              </h1>
              <p style={{ color: 'var(--secondary)', fontSize: '1.125rem', maxWidth: '600px' }}>
                Explore highly curated and optimized fashion built beautifully and blazingly fast using React and Supabase.
              </p>
            </div>
          } />
          {/* We will add Auth and Product Views in the next phase */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
