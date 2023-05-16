const { Configuration, OpenAIApi } = require('openai');

const askAi = async (req, res, next) => {
  const { query } = req.body;
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_api,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 4000,
    });

    res.status(200).json({
      success: true,
      data: completion.choices[0].text,
    });
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error && error.response.data.error.code === 'insufficient_quota') {
      res.status(402).json({
        success: false,
        message: 'Oops! You have insufficient quota to process this request. Please check your plan and billing details.',

      });
    } else if (error.response) {
      res.status(error.response.status).json({
        success: false,
        // message: 'Oops! Please paraphrase your question to provide the right solution.',
        data: error.response.data,
        
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Oops! Something went wrong. Please try again.',
      });
    }
  }
  console.log(query);
};

module.exports = { askAi };
