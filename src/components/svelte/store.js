import { writable } from 'svelte/store';

// Create a writable store to hold the input value
export const bpmGlobal = writable(120); // Initialize with a number