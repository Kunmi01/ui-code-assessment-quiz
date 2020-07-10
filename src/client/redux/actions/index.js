import { STORE_QUESTIONS } from './action-types';

export const storeQuestions = (payload) => {
  return { type: STORE_QUESTIONS, payload };
};
