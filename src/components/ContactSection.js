import React from 'react';
import fetch from 'unfetch';
import Component from 'react-component-component';

import Title from './Title';
import Card from './Card';
import { Form, FormRow, InputWrapper, Label, Input, TextArea } from './Form';
import Button from './Button';

const initialState = {
  submitted: false,
  name: '',
  email: '',
  body: '',
  loading: false,
};

const Contact = ({ title, label }) => (
  <Component
    initialState={initialState}
    render={({
      state: { name, email, body, submitted, loading },
      setState,
    }) => (
      <section aria-label={!title && label}>
        {title && <Title>{title}</Title>}
        <Card flexDirection={'column'} mx={'auto'} px={[2, 3]} py={3}>
          {!submitted ? (
            <form
              name="contact"
              method="post"
              action="/thanks/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={e => {
                setState({ loading: true });
                fetch('/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: encode({ 'form-name': 'contact', name, email, body }),
                })
                  .then(() => setState({ loading: false, submitted: true }))
                  .catch(error => console.error(error));

                e.preventDefault();
              }}
            >
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <p>
                <label>
                  Your name:<br />
                  <input type="text" name="name" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your email:<br />
                  <input type="email" name="email" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message:<br />
                  <textarea name="message" onChange={handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          ) : (
            <div>Thanks!</div>
          )}
          {/* <Form
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={e => {
              setState({ loading: true });
              submitData(e, name, email, body)
                .then(() => setState(initialState))
                .catch(err => console.error(err));
              e.preventDefault();
            }}
          >
            <FormRow>
              <InputWrapper>
                <input name="bot-field" hidden />
                <Input
                  name="name"
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={onChange(setState)}
                />
                <Label for="name">Name</Label>
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="email"
                  id="email"
                  type="text"
                  required
                  value={email}
                  onChange={onChange(setState)}
                />
                <Label for="email">Email</Label>
              </InputWrapper>
            </FormRow>
            <InputWrapper>
              <TextArea
                name="body"
                id="body"
                rows="5"
                required
                value={body}
                onChange={onChange(setState)}
              />
              <Label for="body">Your message</Label>
            </InputWrapper>
            <Button
              width={[1, 'auto']}
              ml={[0, 'auto']}
              px={2}
              py={1}
              type="submit"
            >
              {loading ? 'Loading' : 'Submit'}
            </Button>
          </Form> */}
        </Card>
      </section>
    )}
  />
);

const handleChange = setState => e =>
  setState({ [e.target.name]: e.target.value });

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const submitData = (e, name, email, body) => {
  const payload = encode({
    'form-name': 'contact',
    name,
    email,
    body,
  });
  console.log(payload);
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload,
  });
};

export default Contact;
