```javascript
// pages/about.js
import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      setData({ message: 'Data from API' });
    };
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```
```javascript
// pages/about-solution.js
import { useState } from 'react';

export async function getServerSideProps() {
  // Simulate API call on the server
  await new Promise(resolve => setTimeout(resolve, 2000));
  const data = { message: 'Data from API (Server-Side)' };
  return { props: { data } };
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```