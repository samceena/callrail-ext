const axios = require('axios');
const API_KEY = '';
const AUTH_TOKEN = '';
const BaseURL = 'https://api.callrail.com/v3/a';
const companyURL = BaseURL+"/"+API_KEY+"/"+"companies.json";

const options = {
  headers: { Authorization:'Token token=' +AUTH_TOKEN}
}

function getCompanies(){
  return new Promise( (response, reject) => {
    axios.get('https://api.callrail.com/v3/a/'+API_KEY+'/companies.json', options)
      .then( (axiosResponse) => {
        return response(axiosResponse.data);
        
      } )
      .catch( (axiosReject) => {
        return reject(axiosReject);
      })
  })
}


module.exports.getCompanies = getCompanies;