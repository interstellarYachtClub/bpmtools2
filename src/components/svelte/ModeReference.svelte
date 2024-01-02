<script>
    /*
    import { bpmGlobal } from './store.js';

    let bpm; // Local variable for binding

    // Subscribe to the store and update bpm when the store's value changes
    bpmGlobal.subscribe(value => {
        bpm = value;
    });

    // Update the store whenever bpm changes
    $: bpmGlobal.set(bpm);

    export const modeGlobal = writable('minor'); //default scale
    export const rootGlobal = writable('C'); //default root note
    */

    import { modeGlobal, rootGlobal } from './store.js';
    let mode;
    let root;
    modeGlobal.subscribe(value => {
        mode = value;
    });
    rootGlobal.subscribe(value => {
        root = value;
    });
    
    const MODES = [
    {
        name: 'aeolian',
        label: 'Aeolian mode (minor)',
        steps: [1, 3, 4, 6, 8, 9, 11],
        notation: ['i', 'dim', 'III', 'iv', 'v', 'VI', 'VII']
    },
    {
        name: 'locrian',
        label: 'Locrian mode',
        steps: [1, 2, 4, 6, 7, 9, 11],
        notation: ['dim', 'II', 'iii', 'iv', 'V', 'VI', 'vii']
    },
    {
        name: 'ionian',
        label: 'Ionian mode (major)',
        steps: [1, 3, 5, 6, 8, 10, 12],
        notation: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'dim']
    },
    {
        name: 'dorian',
        label: 'Dorian',
        steps: [1, 3, 4, 6, 8, 10, 11],
        notation: ['i', 'ii', 'III', 'IV', 'v', 'dim', 'VII']
    },
    {
        name: 'phrygian',
        label: 'Phrygian',
        steps: [1, 2, 4, 6, 8, 9, 11],
        notation: ['i', 'II', 'III', 'iv', 'dim', 'VI', 'vii']
    },
    {
        name: 'lydian',
        label: 'Lydian',
        steps: [1, 3, 5, 7, 8, 10, 12],
        notation: ['I', 'II', 'iii', 'dim', 'V', 'vi', 'vii']
    },
    {
        name: 'mixolydian',
        label: 'Mixolydian',
        steps: [1, 3, 5, 6, 8, 10, 11],
        notation: ['I', 'ii', 'dim', 'IV', 'v', 'vi', 'vii']
    }
];
    const ROOTNOTES = [
    {
        name: '0',
        label: 'C',
        value: 0
    },
    {
        name: '1',
        label: 'C# / Db',
        value: 1
    },
    {
        name: '2',
        label: 'D',
        value: 2
    },
    {
        name: '3',
        label: 'D# / Eb',
        value: 3
    },
    {
        name: '4',
        label: 'E',
        value: 4
    },
    {
        name: '5',
        label: 'F',
        value: 5
    },
    {
        name: '6',
        label: 'F# / Gb',
        value: 6
    },
    {
        name: '7',
        label: 'G',
        value: 7
    },
    {
        name: '8',
        label: 'G# / Ab',
        value: 8
    },
    {
        name: '9',
        label: 'A',
        value: 9
    },
    {
        name: '10',
        label: 'A# / Bb',
        value: 10
    },
    {
        name: '11',
        label: 'B',
        value: 11
    }
];
const TWOOCTAVES = [
    {
        label: 'C',
        value: 0
    },
    {
        label: 'C#/Db',
        value: 1
    },
    {
        label: 'D',
        value: 2
    },
    {
        label: 'D#/Eb',
        value: 3
    },
    {
        label: 'E',
        value: 4
    },
    {
        label: 'F',
        value: 5
    },
    {
        label: 'F#/Gb',
        value: 6
    },
    {
        label: 'G',
        value: 7
    },
    {
        label: 'G#/Ab',
        value: 8
    },
    {
        label: 'A',
        value: 9
    },
    {
        label: 'A#/Bb',
        value: 10
    },
    {
        label: 'B',
        value: 11
    },
    {
        label: 'C',
        value: 12
    },
    {
        label: 'C#/Db',
        value: 13
    },
    {
        label: 'D',
        value: 14
    },
    {
        label: 'D#/Eb',
        value: 15
    },
    {
        label: 'E',
        value: 16
    },
    {
        label: 'F',
        value: 17
    },
    {
        label: 'F#/Gb',
        value: 18
    },
    {
        label: 'G',
        value: 19
    },
    {
        label: 'G#/Ab',
        value: 20
    },
    {
        label: 'A',
        value: 21
    },
    {
        label: 'A#/Bb',
        value: 22
    },
    {
        label: 'B',
        value: 23
    },
    {
        label: 'C',
        value: 24
    }
]

</script>

<select bind:value={mode}>
    {#each MODES as mode (mode.name)}
        <option value={mode.name}>{mode.label}</option>
    {/each}
</select>

<select bind:value={root}>
    {#each ROOTNOTES as root (root.name)}
        <option value={root.value}>{root.label}</option>
    {/each}
</select>

<p>Choose a mode and/or a starting key to get notes and chords within that scale.</p>