import { fetchUtils } from 'ra-core';

export default (
    Server_Url: string,
    httpClient = fetchUtils.fetchJson
) => ({
    login: ({ username, password }) => {
        const auth_url= `${Server_Url}/auth`;
        const login_data = new FormData();
        login_data.append('username', username);
        login_data.append('password', password);
  
        return httpClient(auth_url, {
            method: 'POST',
            body: login_data
        }).then( result => {
  
            if (result.json && result.json.success) {
              const data = result.json.data;
              localStorage.setItem('token', data.access_token);
              localStorage.setItem('permissions', data.permissions);
              localStorage.setItem('title', data.user_title);
              localStorage.setItem('email', data.user_email);
              return Promise.resolve()  
            }
  
            Promise.reject();
  
        });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkError: error => {
        // ...
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        const role = localStorage.getItem('permissions');
        return role ? Promise.resolve(role) : Promise.reject();
    }
  }
);
