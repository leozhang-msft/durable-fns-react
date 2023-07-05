import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const API_PATH = '/api/orchestrators/HelloOrchestrator'

      const content = await( await fetch(API_PATH)).json();
      console.log(content);
      setData(text);
    })();
  });

  return <div>Hello {data}</div>;
}

export default App;
