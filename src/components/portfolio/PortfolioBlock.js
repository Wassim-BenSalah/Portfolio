import React, { useState } from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import PortfolioModal from './PortfolioModal'; // Assure-toi que le chemin est correct

function PortfolioBlock(props) {
  const { image, live, source, title, images } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      {/* Conteneur principal */}
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
        {/* Image principale */}
        <Box component={'img'} src={image} alt={'mockup'} style={{ maxWidth: '100%', height: 'auto' }} />
        
        {/* Titre */}
        <h1 style={{ fontSize: '2rem', marginTop: '1rem' }}>{title}</h1>

        {/* Boutons */}
        <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
             alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
          {/* Bouton Live Demo */}
          <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
            {live ? (
              <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
            ) : (
              <span style={{ cursor: 'pointer', fontSize: '1.5rem' }} onClick={handleOpenModal}>
                <i className="fa fa-safari" style={{ marginRight: '0.5rem' }}></i> Live Demo
              </span>
            )}
          </Box>

          {/* Bouton Source Code */}
          {source && (
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
              <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
          )}
        </Box>
      </Box>

      {/* Affichage de la Modal */}
      <PortfolioModal open={openModal} handleClose={handleCloseModal} images={images} />
    </>
  );
}

export default PortfolioBlock;
