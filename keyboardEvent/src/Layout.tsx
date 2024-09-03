import React, { createContext, useContext, ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

interface LayoutContextProps {
}

const LayoutContext = createContext<LayoutContextProps | null>(null);

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};

interface LayoutProviderProps {
  children: ReactNode;
}

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  return (
    <LayoutContext.Provider value={null}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
};

export default LayoutProvider;
