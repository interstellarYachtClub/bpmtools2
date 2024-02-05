<script>

    import { modeGlobal, rootGlobal } from './store.js';
    let mode;
    let selectedModeName = 'aeolian';

    let root;
    let selectedRootName = 'c';

    modeGlobal.subscribe(value => {
        mode = value;
    });
    rootGlobal.subscribe(value => {
        root = value;
    });

    // Update the store whenever mode changes
    //$: modeGlobal.set(mode);
    
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
        name: 'c',
        label: 'C',
        value: 0
    },
    {
        name: 'c#',
        label: 'C# / Db',
        value: 1
    },
    {
        name: 'd',
        label: 'D',
        value: 2
    },
    {
        name: 'd#',
        label: 'D# / Eb',
        value: 3
    },
    {
        name: 'e',
        label: 'E',
        value: 4
    },
    {
        name: 'f',
        label: 'F',
        value: 5
    },
    {
        name: 'f#',
        label: 'F# / Gb',
        value: 6
    },
    {
        name: 'g',
        label: 'G',
        value: 7
    },
    {
        name: 'g#',
        label: 'G# / Ab',
        value: 8
    },
    {
        name: 'a',
        label: 'A',
        value: 9
    },
    {
        name: 'a#',
        label: 'A# / Bb',
        value: 10
    },
    {
        name: 'b',
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

function handleChangeMode() {
    let selectedMode = selectedModeName;
    mode = MODES.find(mode => mode.name === selectedMode);
    modeGlobal.set(mode);
    console.log($modeGlobal);
}

function handleChangeRoot() {
    let selectedRoot = selectedRootName;
    root = ROOTNOTES.find(root => root.name === selectedRoot);
    rootGlobal.set(root);
    console.log($rootGlobal);
}

</script>

<select bind:value={selectedModeName} on:change={handleChangeMode}>
    {#each MODES as mode (mode.name)}
        <option value={mode.name}>{mode.label}</option>
    {/each}
</select>

<select bind:value={selectedRootName} on:change={handleChangeRoot}>
    {#each ROOTNOTES as root (root.name)}
        <option value={root.name}>{root.label}</option>
    {/each}
</select>

<p>Choose a mode and/or a starting key to get notes and chords within that scale.</p>

<table class="mode-reference-table">
     <tr>
        <td>Chord Notation:</td>
        {#each $modeGlobal.notation as notation (notation)}
        <td>{notation}</td>
        {/each}
    </tr>
        
    <tr>
        <td>Chord Root Note:</td>
        {#each $modeGlobal.steps as step (step)}
        <td>{TWOOCTAVES[step+$rootGlobal.value-1].label}</td>
        {/each}
        </tr>
</table>