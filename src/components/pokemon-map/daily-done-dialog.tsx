import React, { useEffect, useState } from 'react';
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Link, Snackbar, SnackbarCloseReason } from "@mui/material"
import './daily-done-dialog.css';
import ShareIcon from '@mui/icons-material/Share';

type DialogDoneDialogProps = {
    isOpen: boolean;
    setIsDialogOpen: (isOpen: boolean) => void;
}

export const DailyDoneDialog = (props: DialogDoneDialogProps) => {
    const { isOpen, setIsDialogOpen } = props;
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [localGuesses, setLocalGuesses] = useState<string[]>([]);

    useEffect(() => {
        const localGuesses = localStorage.getItem('guesses');
        if (localGuesses) {
            setLocalGuesses(localGuesses.split(','));
        }
    }, [isOpen])

    const onShareButtonClick = async () => {
        let results = 'PokéMelody #1 Results:\n';

        const localGuesses = localStorage.getItem('guesses');
        if (localGuesses) {
            const guessesArray = localGuesses.split(',');
            setLocalGuesses(guessesArray);
            guessesArray.forEach((guess, index) => {
                let currentRound = `🎵 ${index + 1}: `;
                const numGuess = Number.parseInt(guess);
                for (let i = 0; i < numGuess; i++) {
                    if (numGuess - 1 === i) {
                        currentRound = currentRound + '✅\n';
                    } else {
                       currentRound = currentRound + '❌'; 
                    }
                }
                
                results = results + currentRound;
            });
            results = results + `Total guesses: ${getTotalGuesses(guessesArray)}`;
        }

        try {
            await navigator.clipboard.writeText(results);
            setIsSnackbarOpen(true);
        } catch (err) {
            console.error('Failed to copy results to clipboard:', err);
        }
    }

    const handleSnackbarClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
      ) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setIsSnackbarOpen(false);
    };

    const getTotalGuesses = (guesses: string[]) => {
        let total = 0;
        guesses.forEach((guess) => {
            total += Number.parseInt(guess);
        })
        return total;
    }

    return (
        <Dialog className="dialog" open={isOpen} PaperProps={{ sx: { backgroundColor: 'hsl(198, 50%, 10%)' } }}>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
            >
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    variant="filled"
                >
                    Results copied to clipboard
                </Alert>
            </Snackbar>
            <DialogTitle className="dialog-title" sx={{ paddingBlockEnd: 0 }}>
                <p>Thanks for playing today!</p>
            </DialogTitle>
            <DialogContent className="dialog-content">
                <h3 className="your-results">Your results:</h3>
                <table className="table">
                    <tbody>
                        {localGuesses.map((guess, index) => (
                            <tr key={index}>
                                <td>🎵 #{index + 1}:</td>
                                <td>{guess} {Number.parseInt(guess) === 1 ? 'guess' : 'guesses'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total-guesses">Total guesses: <span className="your-results">{getTotalGuesses(localGuesses)}</span></div>
                <button className="share-button" onClick={onShareButtonClick}>
                    Copy <ShareIcon fontSize='small'/>
                </button>
            </DialogContent>
            <DialogActions>
                <Link sx={{ textDecoration: 'none', color: 'hsl(198, 50%, 10%)', fontWeight: 600, padding: 0 }} className="link" href="/freeplay" onClick={() => setIsDialogOpen(false)}>
                    Go to Free Play
                </Link>
            </DialogActions>
        </Dialog>
    )
}