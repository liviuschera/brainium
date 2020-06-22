import Clarifai from 'clarifai';

const app = new Clarifai.App({
   apiKey: 'b760c2f72e104db48434030cece764ed',
   //  apiKey: 'c30753f4d5a04929928cebbdf9b3c452',
});

export async function fetchClarifaiData(link) {
   try {
      // const data = await app.models.predict(Clarifai.FACE_DETECT_MODEL, link);
      const data = await app.models.predict(
         'c0c0ac362b03416da06ab3fa36fb58e3',
         link
      );
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
