"use client";
import { useEffect } from 'react';

export default function Error(props) {
  const { error, reset } = props;

  useEffect(() => {
    console.log('error:', error);
  }, [])
  
  return(
    <div>
      <h1>:(</h1>
      <p>Page not found</p>
      <button onClick={reset}>retry</button>
    </div>
  )
}
