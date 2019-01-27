import feathers from "@feathersjs/client";
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';

export const serverAdresss = 'http://localhost:3030'

const api = feathers();
const apiRest = rest(serverAdresss);

api.configure(apiRest.fetch(fetch));

const authOptions = {
    // header: 'Authorization', // the default authorization header for REST
    // prefix: '', // if set will add a prefix to the header value. for example if prefix was 'JWT' then the header would be 'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOi...'
    // path: '/authentication', // the server-side authentication service path
    // jwtStrategy: 'jwt', // the name of the JWT authentication strategy 
    // entity: 'user', // the entity you are authenticating (ie. a users)
    // service: 'users', // the service to look up the entity
    // cookie: 'feathers-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
    // storageKey: 'feathers-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
    storage: window.localStorage // Passing a WebStorage-compatible object to enable automatic storage on the client.
}

api.configure(auth(authOptions));


export default api;