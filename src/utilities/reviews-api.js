import sendRequest from './send-request';
const BASE_URL = '/api/reviews';


export async function createReview(reviewData) {
  return await sendRequest(BASE_URL, 'POST', reviewData);
}