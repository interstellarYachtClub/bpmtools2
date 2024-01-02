import { writable } from 'svelte/store';

// Create a writable store to hold the input value
export const bpmGlobal = writable(120); // Initialize with a number
export const useSamples = writable(false); //use ms by default
export const themeSelect = writable('style-ableish'); //default theme
export const modeGlobal = writable('aeolian'); //default scale
export const rootGlobal = writable(0); //default root note