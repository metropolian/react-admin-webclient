import React, { useEffect, useContext, useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import { fetchUtils } from 'ra-core';
import { Admin, Resource, Pagination, Title, Login } from 'react-admin';
import { DataProviderContext, Loading, Error } from 'react-admin';

import AuthProvider from './AuthProvider';
import DataProvider from './DataProvider';

import * as PageUsers from './PageUsers.js';
import * as PageSettings from './PageSettings.js';

const SERVER_URL = 'http://127.0.0.1:3000/standardapi/api';


const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

/*
const MyAppBar = props => {
  const classes = useStyles();
  return (
      <AppBar {...props}>
          <Typography
              variant="h6"
              color="inherit"
              className={classes.title}
              id="react-admin-title"
          />
          <Logo />
          <span className={classes.spacer} />
      </AppBar>
  );
};
*/

const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#448aff',
    },
    secondary: {
      main: '#448aff',
    },
  },
});


const Dashboard = (props) => {
    const dataProvider = useContext(DataProviderContext);

    return (
    <div>
        <Title title="Welcome to the administration" />
        <p>Lorem ipsum sic dolor amet...</p>
    </div>
    );
};

const MyLogin = (props) =>
  <Login>
    <div>Hello</div>
  </Login>;




const DefaultPagination = (props) => <Pagination rowsPerPageOptions={[25, 50, 100, 200]} {...props} />;

export default function App() {

  

    return (
        <Admin theme={DefaultTheme}
            login={MyLogin}
            dashboard={Dashboard}
            authProvider={AuthProvider(SERVER_URL, httpClient)}
            dataProvider={DataProvider(SERVER_URL, httpClient)}>
            <Resource name="user_types" />

            <Resource name="users" pagination={<DefaultPagination />}                        
                list={PageUsers.DataList} 
                create={PageUsers.DataCreate} 
                edit={PageUsers.DataEdit} />
            <Resource name="settings" pagination={<DefaultPagination />}                        
                list={PageSettings.DataList} 
                create={PageSettings.DataCreate} 
                edit={PageSettings.DataEdit} />
        </Admin>
    );
}
