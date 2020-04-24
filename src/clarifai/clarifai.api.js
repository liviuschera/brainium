import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'b760c2f72e104db48434030cece764ed',
});

export default function clarifyAPIPredict(link) {
  app.models
    .predict(
      'a403429f2ddf4b49b307e318f00e528b',
      link
      // 'https://samples.clarifai.com/face-det.jpg'
    )
    .then(
      function (response) {
        console.log(response);
      },
      function (err) {
        console.log('// there was an error', err);
      }
    );
}
