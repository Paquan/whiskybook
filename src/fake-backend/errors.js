export const errors = {
  userNotFound: {
    status: 'BAD_REQUEST',
    message: 'User not found with userId: 5775f54ce4b03a5a6',
    errors: ['User not found with userId: wrong'],
  },
  badCode: {
    status: 'NOT_FOUND',
    message: 'Security code not match',
    errors: ['Security code not match'],
  },
  loginFailed: {
    states: 'NOT_ACCEPTABLE',
    message: 'Username or password is incorrect',
  },
};
