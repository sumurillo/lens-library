import * as businessesAPI from './businesses-api';


export async function create(businessData) {
  return await businessesAPI.createBusiness(businessData);
}

export async function get() {
  return await businessesAPI.getBusinesses();
}

export async function updateBusiness(businessObj) {
  return await businessesAPI.updateBusiness(businessObj);
}

export async function getBusinessDetail(id) {
  const business = await businessesAPI.getBusinessDetail(id);
  return business
};
