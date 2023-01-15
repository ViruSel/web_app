import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from 'firebase/firestore';
import { db } from './firebase-config';
import './App.css';

function App() {

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, email: newEmail });
  };

  const updateUser = async (id, name, email) => {
    const userDoc = doc(db, "users", id);
    const newFields = { name: newName, email: newEmail};
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Home</h1>
      { 
        users.map((user) => {
          return (
            <div>
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
