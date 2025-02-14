import { kantoThemes } from './kanto/themes';
import { johtoThemes } from './johto/themes';
import { Region } from './region-selector';

export const regionThemes: Record<Region, { name: string; file: string; towns: string[] }[]> = {
    Kanto: kantoThemes,
    Johto: johtoThemes,
};
