import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Modal, Box } from '@mui/material';
import CharacterForm from './CharacterForm';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openForm, setOpenForm] = useState(false);

  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RPG Character Manager
          </Typography>
          <Button color="inherit" component={Link} to="/characters">
            Character List
          </Button>
          <Button color="inherit" onClick={handleOpenForm}>
            Add Character
          </Button>
        </Toolbar>
      </AppBar>

      <Modal open={openForm} onClose={handleCloseForm}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <CharacterForm onClose={handleCloseForm} />
        </Box>
      </Modal>
    </>
  );
};

export default Header;
