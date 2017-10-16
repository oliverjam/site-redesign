import React from 'react';
import Title from './Title';
import Card from './Card';
import { Form, FormRow, InputWrapper, Label, Input, TextArea } from './Form';
import Button from './Button';

export default ({ title, label }) => (
  <section aria-label={!title && label}>
    {title && <Title size={[2, 3]}>{title}</Title>}
    <Card flexDirection={'column'} mx={'auto'} px={[2, 3]} py={3}>
      <Form>
        <FormRow>
          <InputWrapper>
            <Input name="name" id="name" type="text" required />
            <Label for="name">Name</Label>
          </InputWrapper>
          <InputWrapper>
            <Input name="email" id="email" type="text" required />
            <Label for="email">Email</Label>
          </InputWrapper>
        </FormRow>
        <InputWrapper>
          <TextArea name="email" id="email" rows="5" required />
          <Label for="email">Your message</Label>
        </InputWrapper>
        <Button
          width={[1, 'auto']}
          ml={[0, 'auto']}
          px={2}
          py={1}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Card>
  </section>
);
