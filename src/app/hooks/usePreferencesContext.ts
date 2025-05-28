import { useContext } from 'react';
import { PreferencesContext } from '../contexts/PreferencesContext/PreferencesContext';

const usePreferencesContext = () => {
  const context = useContext(PreferencesContext);
  if (!context) {
    throw new Error('usePreferencesContext must be used within a PreferencesProvider');
  }
  return context;
}

export default usePreferencesContext;