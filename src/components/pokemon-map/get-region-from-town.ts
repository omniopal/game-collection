import { kantoTowns } from './kanto/towns';
import { johtoTowns } from './johto/towns';

export const getRegionFromTown = (townName: string): string => {
    for (const town of kantoTowns) {
        if (town.name === townName) {
            return 'Kanto';
        }
    }

    for (const town of johtoTowns) {
        if (town.name === townName) {
            return 'Johto';
        }
    }

    return 'Hoenn';
}