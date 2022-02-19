import { Toolbar } from '@material-ui/core';
import { AppBar, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles(() => ({
  header: {
    // backgroundColor: '#55acee',
    // color: 'white'
  },
}));

const MainHeader = () => {
  const { header } = useStyle();
  return (
    <header>
      <AppBar className={header}>
        <Toolbar>SRM Students Relationship Manager</Toolbar>
      </AppBar>
    </header>
  );
};

export default MainHeader;
