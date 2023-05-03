import { TwitterTimelineEmbed } from "react-twitter-embed";

const Tweets = () => {
  return (
    <section className="">
      <div className="col-sm-8 mx-auto mt-3">
        <p className="mt-4 text-center">Please wait, making a request to Twitter API...</p>
        <div style={{marginTop: '-40px'}}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="olabiranjoshua"
            options={{ height: 900 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Tweets;
