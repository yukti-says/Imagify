import userModel from "../model/userModel.js";
import FormData from "form-data";
import axios from 'axios'



export const generateImage = async (req, res) => {
    try {
      // we need user id and prompt and that will get from req.body also using token
      const { userId, prompt } = req.body;

      const user = await userModel.findById(userId);
      if (!user || !prompt) {
        return res.json({
          success: false,
          message: "missing details",
        });
      }

      // check user balance if  there is user and prompt
      if (user.creditBalance === 0 || userModel.creditBalance < 0) {
        return res.json({
          success: false,
          message: "No credit balance",
          creditBalance: user.creditBalance,
        });
      }

      // created form data
      const formData = new FormData();
      formData.append("prompt", prompt);
      // api request https://clipdrop-api.co/text-to-image/v1
      const { data } = await axios.post(
        "https://clipdrop-api.co/text-to-image/v1",
        formData,
        {
          headers: {
            "x-api-key": process.env.CLIPDROP_API,
          },
          responseType: "arraybuffer",
        }
      );
      // using this array buffer we have to convert it into base 64
      const base64Image = Buffer.from(data, 'binary').toString('base64')
      const resultImage = `data:image/png;base64,${base64Image}`

      // deduct users credit
      await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 })
      res.json({
        success: true,
        message: 'Image generated',
        creditBalance: user.creditBalance - 1,
        resultImage
      })
    }
  // after this lets create routes for this generateImage
    catch (err) {
        console.log(err.message);
        res.json({
            success: false,
            message: err.message
        })
        
    }
}