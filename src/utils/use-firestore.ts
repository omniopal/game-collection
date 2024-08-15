import { collection, doc, getFirestore, updateDoc } from 'firebase/firestore';
import { getApp, getApps, initializeApp } from 'firebase/app';
import 'dotenv/config'

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

    const getDraftPokemon = () => {
        return {
            ref: collection(db, 'draft-pokemon'),
        }
    }

    const updatePokemonSelected = async (pokemonName: string, isDisabled: boolean) => {
        const pokemonDoc = doc(db, 'draft-pokemon', pokemonName);
        await updateDoc(pokemonDoc, { isDisabled });
    }

  return { getDraftPokemon, updatePokemonSelected };
}