import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url )

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  
    return (
     <div className="progress-bar" style={{width : progress + '%'}}></div>
    );
  } 

  export default ProgressBar;