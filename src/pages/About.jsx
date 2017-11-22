import React from 'react';

import styles from './about.css';

class About extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}> About </h2>
        <p>
          After I came back from my Taiwan trip, and I was excited to share
          over 30 of my photos on Instagram, I realized I had to frame each and
          every one of them...
        </p>
        <p>
          I realized that I might as well make
          my own tool to frame every one of them. I would have saved time down
          the line.
        </p>
        <h4 className={styles.question}> But why do you have to frame your photos?</h4>
        <p>
          Isn't it obvious? Gotta keep that feed as consistent as possible :)
        </p>
        <h4 className={styles.question}> So you spent a week building a tool to save minutes...</h4>
        <p>
          Yeah... But it was fun to build! The magic behind this product is
          that everything is done on the client side.
        </p>
        <p>
          Allow me to explain.
        </p>

        <h3 className={styles.subheader}> How it works </h3>
        <p>
          In order to generate each of the framed images, I first embed the image
          into a dynamically generated canvas. From there, I can manipulate the image
          to have a white frame.
        </p>
        <p>
          Once that is set up, I can convert the canvas into a base 64 data URL, strip away
          the URL component, and retain purely the base 64 data.
        </p>
        <p>
          The next thing I leveraged was <a href="https://github.com/Stuk/jszip">JSZip</a>, an amazing library that does some magical
          stuff. I add all of the base 64 images, and then it creates a .zip file. Pretty
          easy right?
        </p>
        <p>
          This whole project made me realize that there are so many powerful features that
          JavaScript is capable of, and it made me question how this could be further leveraged
          in future projects. For example, before uploading an image to a server, I could easily
          compress it by embedding it into a canvas, resizing it, and then creating an image
          out of that, reducing the file size by a reasonable margin and saving network bandwidth.
        </p>

        <h4 className={styles.question}> So what's the takeaway? </h4>
        <p>
          JavaScript is awesome :)
        </p>

        <h3 className={styles.subheader}> Support </h3>
        <p>
          Photoframe doesn't support mobile web because of mobile web limitations.
          Sorry friends!
        </p>

      </div>
    );
  }
}

export default About;
