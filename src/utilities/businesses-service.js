import * as businessesAPI from './businesses-api';


export async function create(businessData) {
  return await businessesAPI.createBusiness(businessData);
}

export async function get() {
  return await businessesAPI.getBusinesses();
}