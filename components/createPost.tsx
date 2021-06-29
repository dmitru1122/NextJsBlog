import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendData, sendDataSuccess } from '@/actions/index';
import Spinner from '@/components/loadinрSpinner';
import styled from 'styled-components';
import { AppState } from '@/interfaces';

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

const RequestStatusTemplate = styled.section`
  position: fixed;
  top: 20%;
  background-color: black;
  padding: 30px;
  border-radius: 10px;
  opacity: 0.6;
  color: white;
  font-size: 24px;
`;

const AddPost: React.FC = () => {
  const initialStateForm = { title: '', body: '' };
  const [form, setForm] = useState(initialStateForm);
  const selectRequestStatus = (state: AppState) => state.sendDataSuccess;
  const sendDataStatus = useSelector(selectRequestStatus);
  const [isShowReequstData, setIsShowReequstData] = useState(false);
  const [isShowResponse, setIsShowResponse] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    const name = e.target.name;
    setForm({ ...form, [name]: e.target.value });
  };

  const sendForm = (event: any) => {
    event.preventDefault();
    setIsShowResponse(true);
    sendDataSuccess(false);
    dispatch(sendData(form));
  };

  useEffect(() => {
    if (!isShowResponse) return;
    const changeShow = () => {
      setIsShowResponse(false);
      dispatch(sendDataSuccess(null));
      setForm({ title: '', body: '' });
    };
    setIsShowReequstData(true);
    setTimeout(changeShow, 3000);
  }, [sendDataStatus]);

  return (
    <>
      <Form onSubmit={sendForm}>
        <TextArea
          value={form.title}
          name="title"
          placeholder="Input Title"
          onChange={handleChange}
          required={true}
        />
        <TextArea
          value={form.body}
          name="body"
          placeholder="Input description"
          onChange={handleChange}
          required={true}
        />
        <Button type="submit" value="send" placeholder="send" />
        {isShowResponse ? (
          <>
            {isShowReequstData ? (
              <RequestStatusTemplate>
                {sendDataStatus ? <div>congrats</div> : <div>Error! check input data</div>}
              </RequestStatusTemplate>
            ) : (
              <Spinner />
            )}
          </>
        ) : (
          <></>
        )}
      </Form>
    </>
  );
};

export default AddPost;
