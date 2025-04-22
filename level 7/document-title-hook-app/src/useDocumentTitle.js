// useDocumentTitle.js
import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Only run when title changes
}

export default useDocumentTitle;
