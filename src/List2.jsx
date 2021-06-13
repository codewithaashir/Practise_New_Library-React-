import React from 'react';
import { useQuery } from 'react-query';
import './App.css';

function List2() {
  const { data, status } = useQuery('News');
  return (
    <div className="App">
      <header className="App-header2">
        {status === 'loading' && <p> Loading...</p>}
        {
            status === 'success'
             && React.Children.toArray(
               data.map((item) => (
                 <div className="Detail">
                   <p>{item.title}</p>
                   <p>{item.title}</p>
                 </div>
               )),
             )
          }
      </header>
    </div>
  );
}

export default List2;
