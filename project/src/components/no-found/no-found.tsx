import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div>
      <p style={{margin: '30px', fontSize:'50px'}}>404 Not Found</p>
      <Link style={{margin: '30px', fontSize:'20px'}} to="/">Вернуться на главную</Link>
    </div>
  );
}
export default NotFound;
