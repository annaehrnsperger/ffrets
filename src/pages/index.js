import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Fretboard from '../components/fretboard';
import Button from '../components/button';
import Footer from '../components/footer';

const queryAudio = require.context('../static/audio', true);
const audioPath = name => queryAudio(name, true);

console.log(
  '%cAnna Ehrnsperger Design Code www.annaehrnsperger.de',
  'font-size: 16px; color: white; background: black'
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "audio" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  // get all file names
  const audioFileNames = data.allFile.edges.map(edge => edge.node.name);

  // generate random number
  const [randomNum] = useState(
    Math.floor(Math.random() * audioFileNames.length + 1)
  );

  const randomAudio = audioFileNames[randomNum];
  const [audio, setAudio] = useState();

  useEffect(() => {
    setAudio(new Audio(audioPath(`./${randomAudio}.mp3`)));
  }, [randomAudio]);

  const [play, setPlay] = useState(true);

  const handlePlay = () => {
    setPlay(!play);
    audio.loop = true;
    return audio.paused ? audio.play() : audio.pause();
  };

  const handleSkip = () => {
    window.location.reload();
  };

  const checkNote = e => {
    if (e.target.classList.contains('selector')) {
      e.target = e.target.parentNode.parentNode;
    } else if (e.target.classList.contains('notename')) {
      e.target = e.target.parentNode.parentNode.parentNode;
    }
    return e.target.id === audioFileNames[randomNum]
      ? e.target.classList.add('yes')
      : e.target.classList.add('nope');
  };

  return (
    <Layout>
      <Button click={handlePlay}>
        <p>{play ? 'play' : 'pause'}</p>
      </Button>
      <Button>
        <Fretboard click={checkNote} />
      </Button>
      <Button click={handleSkip}>
        <p>next</p>
      </Button>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
