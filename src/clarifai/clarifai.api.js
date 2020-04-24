import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'b760c2f72e104db48434030cece764ed',
});

export default function clarifyAPIPredict(link) {
  app.models.predict(Clarifai.FACE_DETECT_MODEL, link).then(
    function (response) {
      const image = document.getElementById('inputImage');
      console.log(image.width);

      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    function (err) {
      console.log('// there was an error', err);
    }
  );
}
