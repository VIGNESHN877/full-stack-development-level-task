// Mock authentication service
export const login = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          email,
          name: 'Test User'
        });
      }, 1000);
    });
  };
  
  export const register = async (name, email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          email,
          name
        });
      }, 1000);
    });
  };