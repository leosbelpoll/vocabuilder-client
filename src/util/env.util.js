const getEnv = (key) => {
  return process.env[`REACT_APP_${key}`];
};

export { getEnv };
