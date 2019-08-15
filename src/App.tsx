import * as React from 'react';
import './app.css';

const App: React.FC = () => {
  // const [imgSoruce, setImgSoruce] = React.useState('');
  const [inputText0, setInputText0] = React.useState('');
  // const [inputText1, setInputText1] = React.useState('');

  // const fetchImage = async () => {
  //   const template_id = '102156234';
  //   const username = 'DevinMetivier1';
  //   const password = 'supersecret';
  //   const url = `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${inputText0}&text1=${inputText1}&username=${username}&password=${password}`;

  //   await fetch(url, {
  //     method: 'POST',
  //     mode: 'no-cors',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'POST',
  //       'Access-Control-Allow-Headers': 'Content-Type',
  //       'Content-Type': 'application/json',
  //       'Accept-Encoding': 'gzip',
  //     },
  //   })
  //     .then(async res => {
  //       console.log(res);
  //       return await res.json();
  //     })
  //     .then(async json => {
  //       console.log(json.body);
  //       return await setImgSoruce(json.body.data.url);
  //     });
  // };

  const mock = (s: string) =>
    s
      .split('')
      .map((c: string, i: number) => (i % 2 ? c.toUpperCase() : c.toLowerCase()))
      .join('');

  return (
    <div className='container'>
      {/* <div>{imgSoruce && <img alt="Sponge Meme" src={imgSoruce} />}</div> */}
      <div>
        <input
          autoFocus
          id='mock'
          name='mock'
          onChange={({ target: { value } }) => setInputText0(value)}
          type='text'
          value={inputText0}
        />

        {/* <label htmlFor="mock">
          <div>Bottom</div>
          <input
            id="mock"
            name="mock"
            onChange={({ target: { value } }) => setInputText1(value)}
            type="text"
            value={inputText1}
          />
        </label> */}

        {/* <div>
          <button onClick={() => fetchImage()} type="button">
            Gimme My Meme
          </button>
        </div> */}
      </div>

      <div>{mock(inputText0)}</div>
      {/* <div>{mock(inputText1)}</div> */}
    </div>
  );
};

export default App;
