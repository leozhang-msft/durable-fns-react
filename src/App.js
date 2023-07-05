import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('Loading msg from API...');

  useEffect(() => {
    (async function () {
      const API_PATH = '/api/orchestrators/HelloOrchestrator'

      let { statusQueryGetUri } = await( await fetch(API_PATH)).json();
      statusQueryGetUri = statusQueryGetUri.replace('https://leozhang-js-durable-func-app.azurewebsites.net', '');
      console.log(statusQueryGetUri);
      const status = (await fetch(statusQueryGetUri));
      console.log(status)
      setData(statusQueryGetUri);
    })();
  });

  return <div>{data}</div>;
}

export default App;
