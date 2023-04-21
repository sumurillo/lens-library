import { useState } from 'react';
import * as reviewsService from '../../utilities/reviews-service';


export default function NewReviewPage() {
  const [review, setReview] = useState({
    title: '',
    description: '',
    user: ''
  });
  

  function handleChange(evt) {
    setReview({ ...review, [evt.target.name]: evt.target.value });
  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    await reviewsService.create(review);
    setReview({ title: '', description: '', user: '' })
  }

  
  return (
    <>
    <h1>Add a Review!</h1>
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" value={ review.title } onChange={handleChange} />
      <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" value={ review.description } onChange={handleChange} />
      <br />
      <input type="submit" value="Submit" />
    </form>
    </>

  );
}