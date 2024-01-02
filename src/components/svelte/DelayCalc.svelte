<script>
    import { bpmGlobal } from './store.js';

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
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/64th_note.svg', division: '1/64', value: beatms / 16},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/32nd_note.svg', division: '1/32', value: beatms / 8},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sixteenth_note_with_upwards_stem.svg', division: '1/16', value: beatms / 4},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/0/07/8thNote.svg', division: '1/8', value: beatms / 2 }, 
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Figure_rythmique_noire_hampe_haut.svg', division: '1/4', value: beatms },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Half_note_with_upwards_stem.svg', division: '1/2', value: beatms * 2 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Whole_note.svg', division: '1/1', value: beatms * 4 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Breve_note_on_stave.svg', division: '2/1', value: beatms * 8 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/White_mensural_longa.svg', division: '4/1', value: beatms * 16 },
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
            {notation: '1/32t' , divison: '1/32t', value: beatms / 8 * 2/3},
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
<table>
    <thead>
            <th>Grid</th>
    </thead>
    <tbody>
        <tr>
            {#each grids as grid}
            <td><img src={grid.notation}/></td>
            {/each}
        </tr>
        <tr>
            {#each grids as grid}
            <td>{grid.division}</td>
            {/each}
        </tr>
        <tr>
            {#each grids as grid}
            <td>{formatValue(grid.value)}</td>
            {/each}
        </tr>
    </tbody>
</table>
<table>
    <thead>
            <th>Dotted</th>
    </thead>
    <tbody>
        <tr>
            {#each dotted as dot}
            <td><img src={dot.notation}/></td>
            {/each}
        </tr>
        <tr>
            {#each dotted as dot}
            <td>{formatValue(dot.value)}</td>
            {/each}
        </tr>
    </tbody>
</table>
<table>
    <thead>
            <th>Triplet</th>
    </thead>
    <tbody>
        <tr>
            {#each triplets as triplet}
            <td><img src={triplet.notation}/></td>
            {/each}
        </tr>
        <tr>
            {#each triplets as triplet}
            <td>{formatValue(triplet.value)}</td>
            {/each}
        </tr>
    </tbody>
</table>
<p>
    These timings can be useful for experimenting with delays and reverbs or manually syncing them to your tempo. 16th, 32nd, and 64th values might be useful for compression attack times for preserving or accentuating transients.
    </p>
</section>