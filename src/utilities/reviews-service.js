import * as reviewsAPI from './reviews-api';


export async function create(reviewData) {
  return await reviewsAPI.createReview(reviewData);
}