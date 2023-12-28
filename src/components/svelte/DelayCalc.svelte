<script>
    import { bpmGlobal } from './store.js';

    let bpm;
    let beat;
    let grids = [];

    // Subscribe to the store and update bpm, delay, and calculations when the store's value changes
    bpmGlobal.subscribe(value => {
        bpm = value;
        beat = 60000 / bpm;
        grids = [
            {name: '1/64', value: beat / 16},
            {name: '1/32', value: beat / 8},
            {name: '1/16', value: beat / 4},
            {name: '1/8', value: beat / 2 },
            {name: '1/4', value: beat },
            {name: '1/2', value: beat*2 },
            {name: '1/1', value: beat*4 },
            {name: '2/1', value: beat*8 },
            {name: '4/1', value: beat*16 },
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

<table>
    <thead>
        <tr>
            <th>Grid</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            {#each grids as grid}
            <td>{grid.name}</td>
            {/each}
        </tr>
        <tr>
            {#each grids as grid}
            <td>{formatValue(grid.value)}</td>
            {/each}
        </tr>
    </tbody>
</table>