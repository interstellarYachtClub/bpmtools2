<script>
    import { bpmGlobal } from './store.js';
    //import { gridsData , dottedData , tripletsData } from './delayData.js';

    let bpm;
    let beatms;
    let grids = [];
    let dotted = [];
    let triplets = [];


    // Subscribe to the store and update bpm, delay, and calculations when the store's value changes
    bpmGlobal.subscribe(value => {
        bpm = value;
        beatms = 60000 / bpm;
        grids = [
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Sixtyfourth-note.svg', division: '1/64', value: beatms / 16},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Music-thirtysecondnote.svg', division: '1/32', value: beatms / 8},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Music-sixteenthnote.svg', division: '1/16', value: beatms / 4},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Music-eighthnote.svg', division: '1/8', value: beatms / 2 }, 
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Music-quarternote.svg', division: '1/4', value: beatms },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Music-halfnote.svg', division: '1/2', value: beatms * 2 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Music-wholenote.svg', division: '1/1', value: beatms * 4 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Music-doublewholenote.svg', division: '2/1', value: beatms * 8 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Music-quadwholenote.svg', division: '4/1', value: beatms * 16 },
        ];
        dotted = [
            {notation: '1/64.' , division: '1/64.', value: beatms / 16 * 1.5},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Dotted_32nd_note_with_upward_stem.svg' , division: '1/32.', value: beatms / 8 * 1.5},
            {notation: '1/16.' , division: '1/16.', value: beatms / 4 * 1.5},
            {notation: '1/8.' , division: '1/8.', value: beatms / 2 * 1.5},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Dotted_quarter_note_with_upwards_stem.svg' , division: '1/4.', value: beatms * 1 * 1.5},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Dotted_half_note_with_upwards_stem.svg' , division: '1/2.', value: beatms * 2 * 1.5},
            {notation: '1/1.' , division: '1/1.', value: beatms * 4 * 1.5},
            {notation: '2/1.' , division: '2/1.', value: beatms * 8 * 1.5},
            {notation: '4/1.' , division: '4/1.', value: beatms * 16 * 1.5},
        ];
        triplets = [
            {notation: '1/64t' , division: '1/64t', value: beatms / 16 * 2/3},
            {notation: '1/32t' , division: '1/32t', value: beatms / 8 * 2/3},
            {notation: '1/16t' , division: '1/16t', value: beatms / 4 * 2/3},
            {notation: '1/8t' , division: '1/8t' , value: beatms / 2 * 2/3},
            {notation: '1/4t' , division: '1/4t' , value: beatms * 1 * 2/3},
            {notation: '1/2t' , division: '1/2t' , value: beatms * 2 * 2/3},
            {notation: '1/1t' , division: '1/1t' , value: beatms * 4 * 2/3},
            {notation: '2/1t' , division: '2/1t' , value: beatms * 8 * 2/3},
            {notation: '4/1t' , division: '4/1t' , value: beatms * 16 * 2/3},
        ];
        
    });

    function formatValue(value) {
        if (value >= 1000) {
            return (Math.round(value * 1000) / 1000000).toFixed(3) + 's';
        } else {
            return Math.ceil(value).toFixed(0) + 'ms';
        }
    }
</script>

<section class="delay-calculations">
    <details>
        <summary>
            <h3>Grid</h3>
        </summary>
        <div class="delay-container">
            <ul>
                {#each grids as grid}
                <li>
                    <!--
                    <div>
                        <img src={grid.notation}/>
                    </div>
                    -->
                    <div class="division">
                        {grid.division}
                    </div>
                    <div class="time">
                        {formatValue(grid.value)}
                    </div>
    
                </li>
                {/each}
            </ul>
        </div>
    </details>
    <details>
        <summary>
            <h3>Dotted</h3>
        </summary>
        <div class="delay-container">
            <ul>
                {#each dotted as dot}
                <li>
                    <!--
                    <div>
                        <img src={dot.notation}/>
                    </div>
                    -->
                    <div class="division">
                        {dot.division}
                    </div>
                    <div class="time">
                        {formatValue(dot.value)}
                    </div>
    
                </li>
                {/each}
            </ul>
        </div>
    </details>

    <details>
        <summary>
            <h3>Triplet</h3>
        </summary>
        <div class="delay-container">
            <ul>
                {#each triplets as triplet}
                <li>
                    <!--
                    <div>
                        <img src={triplet.notation}/>
                    </div>
                -->
                    <div class="division">
                        {triplet.division}
                    </div>
                    <div class="time">
                        {formatValue(triplet.value)}
                    </div>
    
                </li>
                {/each}
            </ul>
        </div>
    </details>

    
    

    
    

    
    

    <p>
    These timings can be useful for experimenting with delays and reverbs or manually syncing them to your tempo. 16th, 32nd, and 64th values might be useful for compression attack times for preserving or accentuating transients.
    </p>
</section>