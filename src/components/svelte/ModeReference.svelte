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

    const CHORDTYPE = [
        {
            name: 'major',
            chordsteps: [0, 4, 7]
        },
        {
            name: 'minor',
            chordsteps: [0, 3, 7]
        },
        {
            name: 'diminished',
            chordsteps: [0, 3, 6]
        }
    ];
    
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
    //console.log($modeGlobal);
}

function handleChangeRoot() {
    //remove pianoroll root class
    let rectId = `proll${root.value}`;
    let rectElement = document.getElementById(rectId);
    rectElement.classList.remove('piano-roll-root-note');

    let selectedRoot = selectedRootName;
    root = ROOTNOTES.find(root => root.name === selectedRoot);
    rootGlobal.set(root);
    //console.log($rootGlobal);
    //set piano rollroot class
    rectId = `proll${root.value}`;
    rectElement = document.getElementById(rectId);
    rectElement.classList.add('piano-roll-root-note');
}

function highlightKey(thiskey){
    //console.log('highlighting!');
    if(thiskey > 11) {
        thiskey = thiskey - 12;
    }
    let keyId = `proll${thiskey}`;
    let keyElement = document.getElementById(keyId);
    keyElement.classList.add('piano-roll-highlight');
}

function handleChordEnter(keystep) {
    let showChordNotation = $modeGlobal.notation[keystep[0]];
    //console.log(showChordNotation);
    let chordRoot = TWOOCTAVES[keystep[1]+$rootGlobal.value-1].value;
    let chord2nd = (getChordType(showChordNotation).chordsteps[1] + chordRoot);
    let chord3rd = (getChordType(showChordNotation).chordsteps[2] + chordRoot);
    //console.log('root: '+chordRoot);
    //console.log('2nd: '+chord2nd);
    //console.log('top: '+chord3rd);
    highlightKey(chordRoot);
    highlightKey(chord2nd);
    highlightKey(chord3rd);
}

function handleChordLeave() {
    //console.log('leaving chord');
    let keys = document.querySelectorAll('.piano-roll-highlight');
    keys.forEach(key => key.classList.remove('piano-roll-highlight'));  
}

function getChordType(notationchars) {
    //match for major chord type with uppercase chord notation
    if (notationchars.match(/[A-Z]/)) {
        return CHORDTYPE.find(chord => chord.name === 'major');
    }

    //match for minor chord type with uppercase chord notation
    else if (notationchars.match(/(?!dim)[a-z]/)) {
        return CHORDTYPE.find(chord => chord.name === 'minor');
    }

    //match for dim chord type
    else if (notationchars.match(/^dim$/)) {
        return CHORDTYPE.find(chord => chord.name === 'diminished');
    }

}

</script>

<p>Choose a mode and/or a starting key to get notes and chords within that scale.</p>
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



<div class="piano-roll-svg" style="height:19vh;">
    <svg xml:space="preserve" width="100%" height="100%">
        <!--  whitekeys  -->
        <rect id="proll0" class="white-key piano-roll-root-note" x="0" y="0" width="14.2857142857%" height="100%"/>
        <rect id="proll2" class="white-key piano-roll-in-key" x="14.2857142857%" y="0" width="14.2857142857%" height="100%"/>
        <rect id="proll4" class="white-key piano-roll-not-in-key" x="28.5714285714%" y="0" width="14.2857142857%" height="100%"/>
        <rect id="proll5" class="white-key piano-roll-in-key" x="42.8571428571%" y="0" width="14.2857142857%" height="100%"/>
        <rect id="proll7" class="white-key piano-roll-in-key" x="57.1428571428%" y="0" width="14.2857142857%" height="100%"/>
        <rect id="proll9" class="white-key piano-roll-not-in-key" x="71.4285714285%" y="0" width="14.2857142857%" height="100%"/>
        <rect id="proll11" class="white-key piano-roll-not-in-key" x="85.7142857142%" y="0" width="14.2857142857%" height="100%"/>
        <!-- blackkeys -->
        <rect id="proll1" class="black-key piano-roll-not-in-key" x="8.9026915113%" y="0" width="8.3333333333%" height="66.6666%"/>
        <rect id="proll3" class="black-key piano-roll-in-key" x="25.8799171841%" y="0" width="8.3333333333%" height="66.6666%"/>
        <rect id="proll6" class="black-key piano-roll-not-in-key" x="51.0869565216%" y="0" width="8.3333333333%" height="66.6666%"/>
        <rect id="proll8" class="black-key piano-roll-in-key" x="67.2360248446%" y="0" width="8.3333333333%" height="66.6666%"/>
        <rect id="proll10" class="black-key piano-roll-in-key" x="83.6956521738%" y="0" width="8.3333333333%" height="66.6666%"/>
        </svg>
</div>


<div class="mode-reference-table">
    <ul>
        {#each $modeGlobal.steps as step,index (step)}
        <li on:mouseover={() => handleChordEnter([index,step])} on:mouseleave={() => handleChordLeave(step)}>
            <div>
                {TWOOCTAVES[step+$rootGlobal.value-1].label}
            </div>
            <div>
                {$modeGlobal.notation[index]}
            </div>
        </li>
        {/each}
    </ul>
</div>
<!--
<h3 class="mode-reference-table-label">Chord Root Note & Chord Notation</h3>
-->
<div class="pianoroll-legend">
    <div>
        <span class="piano-legend-root-note"></span>
        Root Note
    </div>
    <div>
        <span class="piano-legend-in-key"></span>
        In Key
    </div>
    <div>
        <span class="piano-legend-chord"></span>
        Chord
    </div>
</div>