// import Button from "./Button";
import { db } from './firebase-config';
import { collection, addDoc } from "@firebase/firestore";


export default function ListItem(props: { id: string, day: number, month: string, name: string, text: string, year: number }) {
  const {id, day, month, name, text, year} = props;
  
  const tweetsCollectionRef = collection(db, "tweets");

  // const editTweet = async (id, name) => {
  //   await addDoc(tweetsCollectionRef, {active: true, day: newDay, id: "newId", month: newMonth, name: newName, text: newText, year: newYear })
  // };

  // const deleteTweet = async () => {
  //   await addDoc(tweetsCollectionRef, {active: true, day: newDay, id: "newId", month: newMonth, name: newName, text: newText, year: newYear })
  // };

  return (
    <li>
      <h3>{name}</h3>
      <span>{day} / {month} / {year}</span>
      <h4>{text}</h4>
      {/* <button onClick={() => editTweet(id, name)}>Editar</button> */}
      <button>Excluir</button>
      {/* <Button day={day} month={month} name={name} text={text} year={year}>Editar</Button>
      <Button>Excluir</Button> */}
    </li>
  );
}