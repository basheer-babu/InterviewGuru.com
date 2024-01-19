// import { AddQuestionService } from './fetchAlldetails';
// import axios from  '../axios.mock';
// describe('API Tests', () => {
//   it('should mock a successful request', async () => {
//     const response = await axios.get('https://interviewguru.onrender.com/api/user/fetchAll');
//     expect(response.status).toBe(200);
//     expect(response.data).toEqual({ key: 'value' });
//   });
  
// });

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchAll, AddQuestionService } from '../services/fetchAlldetails';


const mock = new MockAdapter(axios);

describe('API Service Tests', () => {
  afterEach(() => {

    mock.reset();
  });

  test('fetchAll should fetch data successfully', async () => {
    
    const responseData = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
    mock.onGet('https://interviewguru.onrender.com/api/user/fetchAll').reply(200, responseData);

    
    const result = await fetchAll();

    
    expect(result).toEqual(responseData);
  });

  test('AddQuestionService should add a question successfully', async () => {
    
    const questionData = { question: 'How to write test cases?' };
    mock.onPost('https://interviewguru.onrender.com/api/user/save', questionData).reply(201, { success: true });

    const result = await AddQuestionService(questionData);

   
    expect(result).toEqual({ success: true });
  });

 
});







