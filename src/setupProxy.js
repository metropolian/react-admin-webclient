
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {

  //  console.log("setupProxy", "use cors");
    //app.use(cors());
  app.use( '/standardapi/api',  
    createProxyMiddleware({
      target: 'http://127.0.0.1/standardapi/api',
      changeOrigin: true
    })
  );

};
