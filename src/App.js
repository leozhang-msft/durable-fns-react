import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('Loading msg from API...');

  useEffect(() => {
    (async function () {
      const API_PATH = '/api/orchestrators/HelloOrchestrator'

      const { statusQueryGetUri } = await( await fetch(API_PATH)).json();
      console.log(statusQueryGetUri);
      const { status } = await (await fetch(statusQueryGetUri)).json();
      console.log(status)
      setData(statusQueryGetUri);
    })();
  });

  return <div>{data}</div>;
}

export default App;
