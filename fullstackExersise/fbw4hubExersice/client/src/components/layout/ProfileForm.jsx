import React, { useState } from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/createProfileAction';
import { initiateAlert } from '../../actions/alertAction';
import Alert from './Alert';

const ProfileForm = ({ createProfile, initiateAlert, alert }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [skills, setSkills] = useState('');
  const [gitHub, setGithub] = useState('');
  const [bio, setBio] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [youtube, setYoutube] = useState('');

  const changeHandler = e => {
    if (e.target.value.length == 1) {
      e.target.classList.remove('is-invalid');
      e.target.className += ' is-valid';
    } else if (e.target.value.length == 0) {
      e.target.classList.remove('is-valid');
      e.target.className += ' is-invalid';
    }
  };

  return (
    <Container>
      <Alert alert={alert} />
      <Form
        className='mx-5'
        onSubmit={e => {
          e.preventDefault();
          const profile = {
            firstName,
            lastName,
            email,
            company,
            website,
            location,
            skills,
            gitHub,
            bio,
            linkedIn,
            youtube,
          };
          let bool = true;
          for (const key of Object.values(profile)) {
            if (!key) bool = false;
          }
          if (!bool) {
            initiateAlert(true, 'Please fill out all Fields!', 'danger');
            setTimeout(() => initiateAlert(false, '', ''), 5000);
          } else {
            createProfile(profile);
            setFirstName('');
            setLastName('');
            setEmail('');
            setCompany('');
            setWebsite('');
            setLocation('');
            setSkills('');
            setGithub('');
            setBio('');
            setLinkedIn('');
            setYoutube('');
            initiateAlert(
              true,
              'Congratulation You created your Profile!',
              'success'
            );
            setTimeout(() => initiateAlert(false, '', ''), 5000);
          }
        }}
      >
        <Form.Row>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={firstName}
              placeholder='Enter your Firstname'
              onChange={event => {
                changeHandler(event);
                setFirstName(event.target.value);
              }}
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={lastName}
              placeholder='Enter your Lastname'
              onChange={event => {
                changeHandler(event);
                setLastName(event.target.value);
              }}
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              isInvalid
              type='email'
              size='lg'
              value={email}
              onChange={event => {
                changeHandler(event);
                setEmail(event.target.value);
              }}
              placeholder='Enter your Email'
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Company</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={company}
              onChange={event => {
                changeHandler(event);
                setCompany(event.target.value);
              }}
              placeholder="Enter your Company's Name"
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Website</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={website}
              onChange={event => {
                changeHandler(event);
                setWebsite(event.target.value);
              }}
              placeholder="Enter your website's Adress"
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Location</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={location}
              onChange={event => {
                changeHandler(event);
                setLocation(event.target.value);
              }}
              placeholder='1234 Main St'
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Group className='mx-5'>
          <Form.Label>Skills</Form.Label>
          <Form.Control
            isInvalid
            type='text'
            size='lg'
            value={skills}
            onChange={event => {
              changeHandler(event);
              setSkills(event.target.value);
            }}
            placeholder='Enter your skills'
          />
          <Form.Control.Feedback type='valid'>
            You did it!
          </Form.Control.Feedback>
          <Form.Control.Feedback type='invalid'>
            Please fill out this field
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Row>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>GitHub Username</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={gitHub}
              onChange={event => {
                changeHandler(event);
                setGithub(event.target.value);
              }}
              placeholder="Enter your GitHub's Username"
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={bio}
              onChange={event => {
                changeHandler(event);
                setBio(event.target.value);
              }}
              placeholder='Enter your Bio'
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={linkedIn}
              onChange={event => {
                changeHandler(event);
                setLinkedIn(event.target.value);
              }}
              placeholder="Enter your LinkedIn's Username"
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='mx-5' as={Col}>
            <Form.Label>Youtube</Form.Label>
            <Form.Control
              isInvalid
              type='text'
              size='lg'
              value={youtube}
              onChange={event => {
                changeHandler(event);
                setYoutube(event.target.value);
              }}
              placeholder="Enter your Youtube's Username"
            />
            <Form.Control.Feedback type='valid'>
              You did it!
            </Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>
              Please fill out this field
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            className='mt-5 mx-5'
            size='lg'
            variant='primary'
            type='submit'
            block
          >
            Submit
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
};

const mapStateToProps = state => ({
  alert: state.alert.alertObj,
});
//alertObj added to props as alert

export default connect(mapStateToProps, { createProfile, initiateAlert })(
  ProfileForm
);
//actions added to props
