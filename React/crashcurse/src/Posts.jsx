import React from 'react';

const Posts = ({ posts }) => {
  console.log(posts);
  const list = posts.map((post, i) => {
    console.log(post);
    const {
      id = id,
      name = name,
      username = username,
      email = email,
      address = address,
      phone = phone,
      website = website,
      company = company
    } = post;
    const {
      street = street,
      suite = suite,
      city = city,
      zipcode = zipcode,
      geo = geo
    } = address;
    return (
      <>
        <li key={i}>
          <ul>
            <h2>Profile # {id}</h2>
            <li> {name}</li>
            <li> {username}</li>
            <li> {email}</li>
            <li>
              <ul>
                <h4>Address</h4>
                <li>{street}</li>
                <li>{suite}</li>
                <li>{city}</li>
                <li>{zipcode}</li>
                <li>
                  <h4>Geo</h4>
                  <ul>
                    <li>{geo.lat}</li>
                    <li>{geo.lng}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li> {phone}</li>
            <li> {website}</li>
            <li>
              <ul>
                <h4>Company</h4>
                <li>{company.name}</li>
                <li>{company.catchPhrase}</li>
                <li>{company.bs}</li>
              </ul>
            </li>
          </ul>
        </li>
        <br />
        <br />
      </>
    );
  });
  return (
    <>
      <h1>all Profiles:</h1>
      <ul>{list}</ul>;
    </>
  );
};

export default Posts;
