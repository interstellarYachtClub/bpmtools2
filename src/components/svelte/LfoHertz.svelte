<script>
    import { bpmGlobal } from './store.js';

    let bpm;
    let beatlfo;
    let lfos = [];


    // Subscribe to the store and update bpm, delay, and calculations when the store's value changes
    bpmGlobal.subscribe(value => {
        bpm = value;
        beatlfo = bpm/60;
        lfos = [
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/64th_note.svg', division: '1/64', value: beatlfo * 16},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/32nd_note.svg', division: '1/32', value: beatlfo * 8},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sixteenth_note_with_upwards_stem.svg', division: '1/16', value: beatlfo * 4},
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/0/07/8thNote.svg', division: '1/8', value: beatlfo * 2 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Figure_rythmique_noire_hampe_haut.svg', division: '1/4', value: beatlfo },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Half_note_with_upwards_stem.svg', division: '1/2', value: beatlfo / 2 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Whole_note.svg', division: '1/1', value: beatlfo / 4 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Breve_note_on_stave.svg', division: '2/1', value: beatlfo / 8 },
            {notation: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/White_mensural_longa.svg', division: '4/1', value: beatlfo / 16 },
        ];

    });

</script>

<section class="lfo-calculations">

                <h3>LFO & Note Durations</h3>
        

    <div class="grid-container">
        <ul>
            {#each lfos as lfo}
            <li>
                <div>
                    <img src={lfo.notation}/>
                </div>
                <div>
                    {lfo.division}
                </div>
                <div>
                    {(Math.ceil(lfo.value * 1000) / 1000).toFixed(3)}Hz
                </div>

            </li>
            {/each}
        </ul>
    </div>
    <p>These timings can be useful for experimenting with synthesizers and analog modelled gear.</p>

</section>