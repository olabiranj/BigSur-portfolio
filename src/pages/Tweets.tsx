import { TwitterTimelineEmbed } from "react-twitter-embed";

const Tweets = () => {
  return (
    <section className="">
      <p>Tweets are not visible to Nigerians</p>
      <div className="col-sm-8 mx-auto mt-3">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="olabiranjoshua"
          options={{ height: 900 }}
        />
      </div>
    </section>
  );
};

export default Tweets;
