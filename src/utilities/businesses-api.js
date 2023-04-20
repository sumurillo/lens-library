import sendRequest from './send-request';
const BASE_URL = '/api/businesses';


export async function createBusiness(businessData) {
  return await sendRequest(BASE_URL, 'POST', businessData);
}

export async function getBusinesses() {
  return await sendRequest(BASE_URL);
}

export async function getBusinessDetail(Id) {
  return sendRequest(`${BASE_URL}/${Id}`)
}

export async function deleteBusinessRequest(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
