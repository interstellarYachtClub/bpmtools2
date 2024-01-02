<script>
    import { bpmGlobal } from './store.js';

    let bpm; // Local variable for binding

    // Subscribe to the store and update bpm when the store's value changes
    bpmGlobal.subscribe(value => {
        bpm = value;
    });

    // Update the store whenever bpm changes
    $: bpmGlobal.set(bpm);

    const GENREPRESETS = [
    {
        bpm: 128,
        label: 'Progressive Trance  (128)',
        range: '126 - 134'
    },
    {
        bpm: 140,
        label: 'Trance  (140)',
        range: '138 - 140'
    },
    {
        bpm: 132,
        label: 'Techno  (132)',
        range: '120 - 140'
    },
    {
        bpm: 120,
        label: 'House  (120)',
        range: '110 - 124'
    },
    {
        bpm: 140,
        label: 'Dubstep  (140)',
        range: '136 - 144'
    },
    {
        bpm: 172,
        label: 'Drum n Bass  (172)',
        range: '160 - 184'
    },
    {
        bpm: 144,
        label: 'Trap  (144)',
        range: '100 - 169'
    },
    {
        bpm: 80,
        label: 'Lofi  (80)',
        range: '60 - 100'
    },
    {
        bpm: 96,
        label: 'Synthwave  (96)',
        range: '80 - 124'

    }
];

</script>

<div class="bpmForm" id="bpmForm">
    <label for="bpmInput">BPM:</label>
    <input type="number" min="1" max="999" name="bpmInput" id="bpmInput" bind:value={bpm}/>
        <label>Preset:</label>
        <select bind:value={bpm}>
            {#each GENREPRESETS as preset}
                <option value={preset.bpm}>{preset.label}</option>
                
            {/each}
        </select>
</div>