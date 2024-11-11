import { Button, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCharacter, updateCharacter } from '../redux/characterSlice';

const races = ["Humano", "Elfo", "Anão", "Gnomo", "Meio-Elfo", "Draconato"];
const alignments = [
  "Lawful Good", "Neutral Good", "Chaotic Good",
  "Lawful Neutral", "True Neutral", "Chaotic Neutral",
  "Lawful Evil", "Neutral Evil", "Chaotic Evil"
];

const CharacterForm = ({ characterToEdit, onClose }) => {
  const [character, setCharacter] = useState({
    name: "",
    age: "",
    race: "",
    eyeColor: "",
    skinColor: "",
    hairColor: "",
    height: "",
    weight: "",
    alignment: "",
    equipment: ""
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (characterToEdit) {
      setCharacter(characterToEdit);
    }
  }, [characterToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prevCharacter) => ({ ...prevCharacter, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (characterToEdit) {
      dispatch(updateCharacter(character));
    } else {
      dispatch(addCharacter(character));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <Typography variant="h5">{characterToEdit ? "Edit Character" : "New Character"}</Typography>
      
      <TextField
        label="Name"
        name="name"
        value={character.name}
        onChange={handleChange}
        required
      />
      
      <TextField
        label="Age"
        name="age"
        type="number"
        value={character.age}
        onChange={handleChange}
        required
      />

      <TextField
        select
        label="Race"
        name="race"
        value={character.race}
        onChange={handleChange}
        required
      >
        {races.map((race) => (
          <MenuItem key={race} value={race}>{race}</MenuItem>
        ))}
      </TextField>

      <TextField
        label="Eye Color"
        name="eyeColor"
        value={character.eyeColor}
        onChange={handleChange}
      />

      <TextField
        label="Skin Color"
        name="skinColor"
        value={character.skinColor}
        onChange={handleChange}
      />

      <TextField
        label="Hair Color"
        name="hairColor"
        value={character.hairColor}
        onChange={handleChange}
      />

      <TextField
        label="Height"
        name="height"
        type="number"
        value={character.height}
        onChange={handleChange}
      />

      <TextField
        label="Weight"
        name="weight"
        type="number"
        value={character.weight}
        onChange={handleChange}
      />

      <TextField
        select
        label="Alignment"
        name="alignment"
        value={character.alignment}
        onChange={handleChange}
        required
      >
        {alignments.map((alignment) => (
          <MenuItem key={alignment} value={alignment}>{alignment}</MenuItem>
        ))}
      </TextField>

      <TextField
        label="Equipment"
        name="equipment"
        value={character.equipment}
        onChange={handleChange}
        placeholder="e.g., Sword, Shield"
      />

      <Button type="submit" variant="contained" color="primary">
        {characterToEdit ? "Save Changes" : "Create Character"}
      </Button>
      <Button onClick={onClose} variant="outlined" color="secondary">
        Cancel
      </Button>
    </form>
  );
};

export default CharacterForm;
