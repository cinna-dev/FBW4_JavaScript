import React from 'react';

const AddProfile = ({ submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <h1>add Your Profile: </h1>
      <label htmlFor='name'>Name</label>
      <input name='name' type='text' placeholder='name' />
      <label htmlFor='username'>username</label>
      <input name='username' type='text' placeholder='username' />
      <label htmlFor='email'>username</label>
      <input name='email' type='text' placeholder='email' />
      <h4>Address</h4>
      <label htmlFor='street'>username</label>
      <input name='street' type='text' placeholder='street' />
      <label htmlFor='suite'>suite</label>
      <input name='suite' type='text' placeholder='suite' />
      <label htmlFor='city'>city</label>
      <input name='city' type='text' placeholder='city' />
      <label htmlFor='zipcode'>zipcode</label>
      <input name='zipcode' type='text' placeholder='zipcode' />
      <label htmlFor='phone'>phone</label>
      <input name='phone' type='text' placeholder='phone' />
      <label htmlFor='website'>website</label>
      <input name='website' type='text' placeholder='website' />
      <h4>Geo</h4>
      <label htmlFor='lat'>lat</label>
      <input name='lat' type='number' placeholder='lat' />
      <label htmlFor='lng'>lng</label>
      <input name='lng' type='number' placeholder='lng' />
      <h4>Company</h4>
      <label htmlFor='companyName'>companyName</label>
      <input name='companyName' type='text' placeholder='companyName' />
      <label htmlFor='catchPhrase'>catchPhrase</label>
      <input name='catchPhrase' type='text' placeholder='catchPhrase' />
      <label htmlFor='bs'>bs</label>
      <input name='bs' type='text' placeholder='bs' />
      <br />
      <input type='submit' />
    </form>
  );
};

export default AddProfile;
