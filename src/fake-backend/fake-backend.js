var dashboardData = require('./dashboard.json');
var users = require('./users.json');

export function configureFakeBackend() {
  console.log('configureFakeBackend ...');
  console.log('process.env.RUN_WITH_FAKE_BACKEND', process.env.RUN_WITH_FAKE_BACKEND);
  if (process.env.RUN_WITH_FAKE_BACKEND === 'false') {
    return;
  }
  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      if (url.endsWith('/api/auth/login') && opts.method === 'POST') {
        doFakeLogin();
        return;
      }
      if (url.endsWith('/api/dashboard') && opts.method === 'GET') {
        console.log('getDashboardData');
        getDashboardData(resolve);
        return;
      }
      realFetch(url, opts).then(response => resolve(response));
    });
  };
}

function getDashboardData(resolve) {
  resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(dashboardData),
  });
}

function doFakeLogin() {
  let params = JSON.parse(opts.body);
  console.log('FAKT-BACKEND: /api/auth/login', params);
  // find if any user matches login credentials
  let filteredUsers = users.filter(user => {
    return (
      user.username === params.username && user.password === params.password
    );
  });

  if (filteredUsers.length) {
    // if login details are valid return user details and fake jwt token
    let user = filteredUsers[0];
    const jsondata = {
      user: JSON.stringify(user),
    };
    const accessToken = jwtUtils.createToken(jsondata);
    let responseJson = {
      token: accessToken,
    };
    resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(responseJson),
    });
  } else {
    resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(errors.loginFailed),
    });
  }
}

function getParams(url) {
  var regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    params[match[1]] = match[2];
  }
  return params;
}
