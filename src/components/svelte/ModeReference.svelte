<script>
    import { modeGlobal, rootGlobal } from './store.js';
    import { CHORDTYPE , MODES , ROOTNOTES , TWOOCTAVES } from './modeRefData.js';
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
    if(thiskey > 11 && thiskey < 24) {
        thiskey = thiskey - 12;
    }
    else if(thiskey > 23){
        thiskey = thiskey - 24;
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
    else if (notationchars.match(/^[iv]/)) {
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