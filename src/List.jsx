import React from 'react';
import { useQuery } from 'react-query';
import './App.css';
import List2 from './List2';

function List() {
  const fetchData = async () => {
    const data = await fetch('https://api.hnpwa.com/v0/news/1.json');
    return data.json();
  };
  const { data, status } = useQuery('News', fetchData);
  return (
    <div className="App">
      <header className="App-header">
        {status === 'loading' && <p> Loading...</p>}
        {
            status === 'success'
             && React.Children.toArray(
               data.map((item) => (
                 <div>
                   <p>{item.title}</p>
                 </div>
               )),
             )
          }
        <List2 />
      </header>
    </div>
  );
}

export default List;
