import React from 'react';
import { Box, Modal, Button } from '@mui/material';

function PortfolioModal({ open, handleClose, images }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="screenshot-modal"
      aria-describedby="project-screenshots"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="rgba(255, 255, 255, 0.9)"
        p={4}
        borderRadius={'8px'}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap="1rem"
          maxWidth="90%"
          maxHeight="90vh"
          style={{
            overflow: 'auto', // Permet de faire défiler le contenu s'il est trop grand
            padding: '1rem',
            borderRadius: '8px',
          }}
        >
          {/* Titre Modal */}
          <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Project Screenshots</h2>
          
          {/* Afficher les images avec meilleur scrolling */}
          <Box
            display="flex"
            flexWrap="wrap"
            gap="1rem"
            justifyContent="center"
            alignItems="center"
            style={{
              overflowY: 'auto', // Ajoute la possibilité de défiler verticalement
              maxHeight: '60vh', // Limite la hauteur visible de la zone de contenu
            }}
          >
            {images && images.map((img, idx) => (
              <Box
                key={idx}
                component={'img'}
                src={img}
                alt={`screenshot-${idx}`}
                style={{
                  maxWidth: '700px',
                  maxHeight: '700px',
                  objectFit: 'contain',
                  boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
                  borderRadius: '4px',
                }}
              />
            ))}
          </Box>

          {/* Bouton Fermer */}
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            style={{ alignSelf: 'center', marginTop: '1rem' }}
          >
            Fermer
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default PortfolioModal;
