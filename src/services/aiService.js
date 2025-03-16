import axios from 'axios';

export const getEssayFeedback = async (essayText) => {
  try {
    const response = await axios.post('/api/ai/essay-feedback', { essayText });
    return response.data.feedback; // The AI feedback
  } catch (error) {
    console.error('Error fetching essay feedback:', error);
    throw error;
  }
};
