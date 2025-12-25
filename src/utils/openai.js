import OpenAI from 'openai';

const openAI = new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI_KEY 
});

export default openAI;