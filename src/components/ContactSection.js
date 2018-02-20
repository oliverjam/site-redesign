import React from 'react';
import fetch from 'unfetch';
import Component from 'react-component-component';

import Title from './Title';
import Card from './Card';
import { Form, Row, InputWrapper, Label, Input, TextArea } from './Form';
import Button from './Button';

const initialState = {
  name: '',
  email: '',
  body: '',
  loading: false,
};

const Contact = ({ title, label }) => (
  <Component
    initialState={initialState}
    render={({ state: { name, email, body, loading }, setState }) => (
      <section aria-label={!title && label}>
        {title && <Title>{title}</Title>}
        <Card flexDirection={'column'} mx={'auto'} px={[2, 3]} py={3}>
          <Form
            name="contact-form"
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
            <Row>
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
            </Row>
            <Row>
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
            </Row>
            <Row>
              <Button
                width={[1, 'auto']}
                ml={[0, 'auto']}
                px={2}
                py={1}
                type="submit"
              >
                {loading ? 'Loading' : 'Submit'}
              </Button>
            </Row>
          </Form>
        </Card>
      </section>
    )}
  />
);

const onChange = setState => e => setState({ [e.target.name]: e.target.value });

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const submitData = (e, name, email, body) => {
  const payload = encode({
    'form-name': 'contact-form',
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
