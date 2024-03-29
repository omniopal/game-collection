import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import './game-image-modal-button.css';

export type GameImageModalProps = {
    text: string;
    image: string | undefined;
}

export const GameImageModalButton: React.FC<GameImageModalProps> = (props) => {
    const { text, image } = props;
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpenModal = (event: React.MouseEvent) => {
        setOpenModal(true);
        event.stopPropagation();
    };

    const closeModal = (event: React.MouseEvent) => {
        setOpenModal(false);
        event.stopPropagation();
    }

    return (
        <>
            {image && <>
                <IconButton onClick={handleOpenModal}><CameraAltIcon /></IconButton>
                <Modal
                    open={openModal}
                    onClose={closeModal}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            maxWidth: '80%',
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                            backgroundColor: '#DBDBDB',
                        }}
                    >
                        <ModalClose sx={{ m: 1, '&:hover': { backgroundColor: '#DBDBDB', color: '#F51B1B' }, }} />
                        <Typography
                            className="title"
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={1}
                        >
                            {text}
                        </Typography>
                        <div className="modal-image-container">
                            <img className="modal-image" src={`./images/${image}`} />
                        </div>
                    </Sheet>
                </Modal>
            </>}
        </>
    );
}