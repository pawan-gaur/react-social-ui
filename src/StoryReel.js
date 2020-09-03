import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://picsum.photos/id/201/200/300'
        profileSrc='https://picsum.photos/id/101/200/300'
        title='Pawan Gaur'
      />
      <Story
        image='https://picsum.photos/id/202/200/300'
        profileSrc='https://picsum.photos/id/102/200/300'
        title='Uma Chaudhary'
      />
      <Story
        image='https://picsum.photos/id/203/200/300'
        profileSrc='https://picsum.photos/id/103/200/300'
        title='Megha Verma'
      />
      <Story
        image='https://picsum.photos/id/204/200/300'
        profileSrc='https://picsum.photos/id/104/200/300'
        title='Rekha Chauhan'
      />
      <Story
        image='https://picsum.photos/id/206/200/300'
        profileSrc='https://picsum.photos/id/106/200/300'
        title='Raveena Gaur'
      />
    </div>
  );
}

export default StoryReel;
