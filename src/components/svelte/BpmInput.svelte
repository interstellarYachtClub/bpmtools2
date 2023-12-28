<script>
    import { bpmGlobal } from './store.js';

    let bpm; // Local variable for binding

    // Subscribe to the store and update bpm when the store's value changes
    bpmGlobal.subscribe(value => {
        bpm = value;
    });

    // Update the store whenever bpm changes
    $: bpmGlobal.set(bpm);
</script>

<div class="bpmForm">
    <label for="bpmInput">BPM:</label>
    <input type="number" min="1" max="999" name="bpmInput" id="bpmInput" bind:value={bpm}/>
</div>