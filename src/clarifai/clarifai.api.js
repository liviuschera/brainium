import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'b760c2f72e104db48434030cece764ed',
});

export async function fetchClarifaiData(link) {
  try {
    const data = await app.models.predict(Clarifai.FACE_DETECT_MODEL, link);
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
      // console.log(clarifaiBoundingRegions);

      // const clarifaiBoundingBox =
      //   data.outputs[0].data.regions[0].region_info.bounding_box;
      return clarifaiBoundingRegions;
      // return {
      //   leftCol: clarifaiBoundingBox.left_col * width,
      //   topRow: clarifaiBoundingBox.top_row * height,
      //   rightCol: width - clarifaiBoundingBox.right_col * width,
      //   bottomRow: height - clarifaiBoundingBox.bottom_row * height,
      // };
    } else {
      throw new Error("Can't detect any face in this image.");
    }
  } catch (error) {
    console.error(error);
    return {};
  }
}
