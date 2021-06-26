import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendData, sendDataSuccess } from '@/actions/index';
import styled from 'styled-components';

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  width: 20px;
  height: 20px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;
const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  position: relative;
  display: block;
  width: 200px;
  min-height: 20px;
  color: #1f2429;
  background: #fff;
  border-radius: 5px;
  border: 3px solid black;
  margin: 10px;
  font-weight: 700;
`;
const TextArea = styled.textarea`
  position: relative;
  display: block;
  width: 200px;
  min-height: 100px;
  color: #1f2429;
  background: #fff;
  border-radius: 5px;
  border: 3px solid black;
  margin: 10px;
  font-weight: 700;
`;

const AddPost: React.FC = () => {
  const [form, setForm] = useState({ title: '', body: '' });
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const sendForm = () => {
    sendDataSuccess(false);
    dispatch(sendData(form));
  };

  return (
    <>
      <Form>
        <Input
          type="text"
          value={form.title}
          name="title"
          placeholder="Input Title"
          onChange={handleChange}
        />
        <TextArea
          value={form.body}
          name="body"
          placeholder="Input description"
          onChange={handleChange}
        />
        <Button type="button" value="send" placeholder="send" onClick={sendForm} />
      </Form>
    </>
  );
};

export default AddPost;
