import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/characterSlice';
import CharacterForm from './CharacterForm';
import { deleteCharacter } from '../redux/characterSlice';

const CharacterList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.characters);
  const [selectedCharacter, setSelectedCharacter] = React.useState(null);
  const [openForm, setOpenForm] = React.useState(false);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleEditClick = (character) => {
    setSelectedCharacter(character);
    setOpenForm(true);
  };

  const handleDeleteClick = (id) => {
    console.log(id);
    
    dispatch(deleteCharacter(id));
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setSelectedCharacter(null);
  };

  if (!list || list.length === 0) {
    return <div>No characters found!</div>;
  }

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {status === 'succeeded' && (
         <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Age</th>
             <th>Race</th>
             <th>Alignment</th>
             <th>Eye Color</th>
             <th>Skin Color</th>
             <th>Hair Color</th>
             <th>Height</th>
             <th>Weight</th>
             <th>Equipment</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {list.map((character) => (
             <tr key={character.id}>
               <td>{character.name}</td>
               <td>{character.age}</td>
               <td>{character.race}</td>
               <td>{character.alignment}</td>
               <td>{character.eyeColor}</td>
               <td>{character.skinColor}</td>
               <td>{character.hairColor}</td>
               <td>{character.height}</td>
               <td>{character.weight}</td>
               <td>{Array.isArray(character.equipment) ? character.equipment.join(', ') : 'No equipment'}</td>
               <td>
                 <Button onClick={() => handleEditClick(character)}>Edit</Button>
                 <Button onClick={() => handleDeleteClick(character.id)}>Delete</Button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
      )}

      <Dialog open={openForm} onClose={handleCloseForm} maxWidth="sm" fullWidth>
        <DialogTitle>{selectedCharacter ? 'Edit Character' : 'Create Character'}</DialogTitle>
        <DialogContent>
          <CharacterForm
            characterToEdit={selectedCharacter}
            onClose={handleCloseForm}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CharacterList;
