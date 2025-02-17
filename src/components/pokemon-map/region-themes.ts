import { ogKantoThemes, kantoThemes } from './kanto/themes';
import { ogJohtoThemes, johtoThemes } from './johto/themes';
import { Region } from './region-selector';

export type Theme = {
    name: string;
    file: string;
    towns: string[];
}

export const regionThemes: Record<Region, { ogTheme: Theme[], theme: Theme[] }> = {
    Kanto: { ogTheme: ogKantoThemes, theme: kantoThemes },
    Johto: { ogTheme: ogJohtoThemes, theme: johtoThemes },
};
