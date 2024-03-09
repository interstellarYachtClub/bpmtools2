import { writable } from 'svelte/store';

// Create a writable store to hold the input value
export const bpmGlobal = writable(120); // Initialize with a number
export const useSamples = writable(false); //use ms by default
export const themeSelect = writable('web'); //default theme
export const modeGlobal = writable({
    name: 'aeolian',
    label: 'Aeolian mode (minor)',
    steps: [1, 3, 4, 6, 8, 9, 11],
    notation: ['i', 'dim', 'III', 'iv', 'v', 'VI', 'VII']
}); //default scale
export const rootGlobal = writable({
    name: 'c',
    label: 'C',
    value: 0
}); //default root note