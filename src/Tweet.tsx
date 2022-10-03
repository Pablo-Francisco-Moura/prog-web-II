import { useState } from "react";
import { db } from './firebase-config';
import { collection, addDoc } from "@firebase/firestore";

export function Tweet() {
  const tweetsCollectionRef = collection(db, "tweets");

  const createTweet = async () => {
    let id = "" + Math.floor(Math.random() * 10 + 1);
    await addDoc(tweetsCollectionRef, {active: true, day: newDay, id: id, month: newMonth, name: newName, text: newText, year: newYear })
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
      <button onClick={createTweet}> Criar Tweet </button>
    </>
  );
}