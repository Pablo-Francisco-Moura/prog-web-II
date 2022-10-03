import { useState, useEffect } from "react";
import { db } from './firebase-config';
import { collection, getDocs } from "@firebase/firestore";
import ListItem from "./ListaItem";
import { AppRoutes } from "./Routes";
import { Tweet } from "./Tweet";

type Tweet = {
  active: boolean;
  day: number;
  id: string;
  month: string;
  name: string;
  text: string;
  year: number;
};

export function App() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const tweetsCollectionRef = collection(db, "tweets");

  useEffect(() => {
    const getTweets = async () => {
      const data = await getDocs(tweetsCollectionRef);
      
      console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      const result = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Tweet[];
      setTweets(result);
      console.log("result", result);
      console.log("tweets", tweets);
    };
    getTweets();
  }, []);

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Tweet />
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <h1>Tweets</h1>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}> 
        <ul style={{
          display: 'grid',
          gridGap: '200px',
          gridAutoRows: '1fr',
          gridTemplateColumns: 'repeat(4, 1fr)'
        }}>
          {tweets.map((tweet) => (
            <ListItem id={tweet.id} day={tweet.day} month={tweet.month} name={tweet.name} text={tweet.text} year={tweet.year} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;