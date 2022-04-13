import Banner from 'components/Banner';
import Content from 'components/Content';
import Footer from 'components/Footer';
import React, { useState } from 'react';
import 'styles/App.css';
import TEMP_STATICS from 'etc/TempStatics.json';

function App () {
  const [getPage, setPage] = useState(window.location.pathname);
  const [getUser, setUser] = useState('');

  window.history.pushState({}, '', getPage);

  return (
    <div className='app'>
      <Banner routes={TEMP_STATICS.BANNER_DATA} getPage={getPage} setPage={setPage}/>
      <Content 
        getPage={getPage}
        setPage={setPage}
        getUser={getUser}
        setUser={setUser}
      />
      <Footer></Footer>
    </div>
  );
}

export default App;
