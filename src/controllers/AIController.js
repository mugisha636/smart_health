import{Configuration,OpenAIApi} from 'openai'

const askAi=async(req,res,next)=>{
    const {query}=req.body
    const configuration=new Configuration({
        apiKey:process.env.OPENAI_api
    })
    const openai=new OpenAIApi(configuration);

    try {
        const completion=await openai.createCompletion({
            model:'text-davinci-003',
            prompt:query,
            max_tokens:4000
        })

        res.status(200).json({
            success:true,
            data:completion.data.choices[0].text
        })
    } catch (error) {
        
        if (error.response) {
            res.status(error.response.status).json({
                success:false,

                message:'ooh! paraphrase your question in order to give you right solution ',
                // data:error.response.data

            })
        }
        else{
            res.status(404).json({
                success:false,
                message:'ooh! dear try it again',

                // data:error.message
            })
        }
    }
    console.log(query);
}

module.exports={askAi}