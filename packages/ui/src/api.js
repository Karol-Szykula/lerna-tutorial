import feathers from "@feathersjs/client";
import rest from '@feathersjs/rest-client'

const api = feathers();
const apiRest = rest('http://localhost:3030');

api.configure(apiRest.fetch(fetch));

api.configure(feathers.authentication({
    storage: window.localStorage
}));

export const serverAdresss = 'http://localhost:3030'

export default api;