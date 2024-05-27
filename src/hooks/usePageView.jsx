
// src/hooks/usePageView.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics, logEvent } from '../components/firebase';

const usePageView = () => {
    
  const location = useLocation();
  console.log("page view triggered");

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title
    });
    console.log("event logged")
  }, []);
};

export default usePageView;
