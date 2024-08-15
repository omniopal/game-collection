import { collection, doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import 'dotenv/config'
import { DraftPokemon } from 'src/components/draftlocke';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: "draftlocke",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

export function useFirestore() {
    // Initialize Firebase
    const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    const db = getFirestore(app);

    const getDraftPokemonRef = () => {
        return collection(db, 'draft-pokemon');
    }

    const getPlayersRef = () => {
        return collection(db, 'players');
    }

    const updatePokemonDisabled = async (pokemonName: string, isDisabled: boolean) => {
        const pokemonDoc = doc(db, 'draft-pokemon', pokemonName);
        await updateDoc(pokemonDoc, { isDisabled });
    }

    const setPokemonDraftedBy = async (pokemonName: string, draftedBy: string) => {
        const pokemonDoc = doc(db, 'draft-pokemon', pokemonName);
        await updateDoc(pokemonDoc, { draftedBy });
    }

    const getPlayers = async () => {
        const playersDoc = doc(db, 'players', 'players');
        await getDoc(playersDoc);
    }


    const addPokemon = async (pokemonName: string, data: DraftPokemon) => {
        try {
            const docRef = doc(db, 'draft-pokemon', pokemonName.toLowerCase());
            await setDoc(docRef, data);
        } catch (e) {
            console.error('Error adding pokemon to Firestore: ', e);
        }
    }

  return { getPlayersRef, getPlayers, setPokemonDraftedBy, getDraftPokemonRef, updatePokemonDisabled, addPokemon };
}