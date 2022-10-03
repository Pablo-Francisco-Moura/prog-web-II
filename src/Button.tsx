import { useState } from "react";
import { db } from './firebase-config';
import { collection, addDoc } from "@firebase/firestore";

export default function Button(props: { day: number, month: string, name: string, text: string, year: number }) {
  const {day, month, name, text, year} = props;

  const tweetsCollectionRef = collection(db, "tweets");

  const editTweet = async () => {
    await addDoc(tweetsCollectionRef, {active: true, day: newDay, id: "newId", month: newMonth, name: newName, text: newText, year: newYear })
  };

  const [newName, setNewName] = useState(" ");
  const [newText, setNewText] = useState(" ");
  const [newDay, setNewDay] = useState(" ");
  const [newMonth, setNewMonth] = useState(" ");
  const [newYear, setNewYear] = useState(" ");

  return (
    <>
      <input type="text" placeholder="Digite o Título" onChange={(event) => {setNewName(event.target.value)}} />
      <input type="text" placeholder="Digite o conteúdo" onChange={(event) => {setNewText(event.target.value)}} />
      <input type="number" placeholder="Digite o dia" onChange={(event) => {setNewDay(event.target.value)}} />
      <input type="text" placeholder="Digite o mês" onChange={(event) => {setNewMonth(event.target.value)}} />
      <input type="number" placeholder="Digite o ano" onChange={(event) => {setNewYear(event.target.value)}} />
      <button onClick={editTweet}> </button>
    </>
  )
}