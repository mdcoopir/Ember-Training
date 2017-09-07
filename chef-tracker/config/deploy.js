module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'menu-tracker',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
