// import Clarifai from 'clarifai';


///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////////////////

const MODEL_ID = 'face-detection';
// const app = new Clarifai.App({
//    apiKey: 'e82f0f99711a451ba5d9e2412de6002d',
// });

const getRequestOptionsFromClarifaiAPI = (imageURL) => {
   // Your PAT (Personal Access Token) can be found in the portal under Authentification
   const PAT = '1a173ce53ec94ad9b737f0e3053f185f';
   // Specify the correct user_id/app_id pairings
   // Since you're making inferences outside your app's scope
   const USER_ID = '1tkk7mamd7g0';
   const APP_ID = 'brainium';
   // Change these to whatever model and image URL you want to use
   const IMAGE_URL = imageURL;

   const raw = JSON.stringify({
      "user_app_id": {
         "user_id": USER_ID,
         "app_id": APP_ID
      },
      "inputs": [
         {
            "data": {
               "image": {
                  "url": IMAGE_URL
               }
            }
         }
      ]
   });
   const requestOptions = {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Authorization': 'Key ' + PAT
      },
      body: raw
   };
   return requestOptions;
};

export async function fetchClarifaiData(link) {
   try {
      // const data = await app.models.predict(
      //    MODEL_ID,
      //    link
      // );
      const data = fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", getRequestOptionsFromClarifaiAPI(link))
         .then(response => response.json());
      return data;
   } catch (error) {
      console.log('Something went wrong: ', error);
   }
}

export function calculateFaceLocation(data) {
   try {
      if (Object.keys(data.outputs[0].data).length > 0) {
         const image = document.getElementById('inputImage');
         const width = Number(image.width);
         const height = Number(image.height);
         const clarifaiBoundingRegions = data.outputs[0].data.regions.map(
            (region) => {
               const regionData = region.region_info.bounding_box;
               return {
                  leftCol: regionData.left_col * width,
                  topRow: regionData.top_row * height,
                  rightCol: width - regionData.right_col * width,
                  bottomRow: height - regionData.bottom_row * height,
               };
            }
         );
         return clarifaiBoundingRegions;
      } else {
         throw new Error("Can't detect any face in this image.");
      }
   } catch (error) {
      console.error(error);
      return [];
   }
}
