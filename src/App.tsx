import { useEffect, useState } from 'react';
import { isLinkedInPost } from '@/lib/utils/popup';
import Welcome from '@/components/popup/welcome';
import Dashboard from './components/popup/dashboard';
import './App.css';

function App() {
  const [isLnPost, setIsLnPost] = useState(false);
  useEffect(() => {
    isLinkedInPost().then((response) => setIsLnPost(response));
  });

  return <>{isLnPost ? <Dashboard /> : <Welcome />}</>;
}

export default App;
