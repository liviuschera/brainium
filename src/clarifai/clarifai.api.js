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
    const clarifaiBoundingBox =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);

    return {
      leftCol: clarifaiBoundingBox.left_col * width,
      topRow: clarifaiBoundingBox.top_row * height,
      rightCol: width - clarifaiBoundingBox.right_col * width,
      bottomRow: height - clarifaiBoundingBox.bottom_row * height,
    };
  } catch (error) {
    console.error('Invalid API data: ', error);
  }
}
