import sendRequest from './send-request';
const BASE_URL = '/api/businesses';


export async function createBusiness(businessData) {
  return await sendRequest(BASE_URL, 'POST', businessData);
}

export async function getBusinesses() {
  return await sendRequest(BASE_URL);
}

export async function updateBusiness(businessObj) {
  return await sendRequest(`${BASE_URL}/update`, 'PUT', businessObj);
}