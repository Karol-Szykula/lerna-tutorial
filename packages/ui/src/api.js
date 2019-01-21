import feathers from "@feathersjs/client";
import rest from '@feathersjs/rest-client'

const api = feathers();
const apiRest = rest('http://localhost:3030');

api.configure(apiRest.fetch(fetch));

export const auth = api.service('users')

export default api;