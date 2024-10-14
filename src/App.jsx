import React, { useEffect, useState } from 'react';
import './index.css';
export default function App() {
  const [id, setId] = useState(1);
  const [utilisateur, setUtilisateur] = useState({});
  const [address, setAddress] = useState({});

  function handelChangeId(event) {
    setId(event.target.value);
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        setAddress(user.address);
        setUtilisateur(user);
      });
  }, [id]);

  return (
    <div>
      <h1>Détails utilisateur</h1>
      <div>
        <label>Entrez l'ID de l'utilisateur :</label>
        <input type="text" onChange={handelChangeId} value={id}></input>
      </div>
      {utilisateur && address ? (
        <div className='child' key={utilisateur.id}>
          <h3 style={{ color: "rgb(92, 62, 3)" }}>ID : {utilisateur.id} Nom : {utilisateur.name} {utilisateur.username}</h3>
          <p>Email : {utilisateur.email}</p>
          <p>Téléphone : {utilisateur.phone}</p>
          <p>Site web : {utilisateur.website}</p>
          <p>Rue : {address.street}</p>
          <p>Ville : {address.city}</p>
        </div>
      ) : (
        <p>Veuillez choisir un ID valide !</p>
      )}
    </div>
  );
}