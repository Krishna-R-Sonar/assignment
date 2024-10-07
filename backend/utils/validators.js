export const validateLogin = (username, password) => {
    if (!username || !password) {
      return 'Username and password are required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }
    return null;
  };
  