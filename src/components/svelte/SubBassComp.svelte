<script>
    // Define the data for the table
    const data = [
        { note: 'C', freq: '32.7', time: '31' },
        { note: 'C#/Db', freq: '34.6', time: '29' },
        { note: 'D', freq: '36.7', time: '27' },
        { note: 'D#/Eb', freq: '38.9', time: '26' },
        { note: 'E', freq: '41.2', time: '24' },
        { note: 'F', freq: '43.6', time: '23' },
        { note: 'F#/Gb', freq: '46.3', time: '22' },
        { note: 'G', freq: '49.0', time: '20' },
        { note: 'G#/Ab', freq: '51.9', time: '19' },
        { note: 'A', freq: '55.0', time: '18' },
        { note: 'A#/Bb', freq: '58.3', time: '17' },
        { note: 'B', freq: '61.7', time: '16' },
    ];
</script>
<section class="subbass-compression">
    <table>
        <thead>
            <tr>
                <th>Note</th>
                <th>Frequency</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {#each data as row}
                <tr>
                    <td>{row.note}<sub>1</sub></td>
                    <td>{row.freq}<span class="table-units">Hz</span></td>
                    <td>{row.time}<span class="table-units">ms</span></td>
                </tr>
            {/each}
        </tbody>
    </table>
<p>
    This table provides the time it takes to complete a single sub bass cycle. It may be beneficial for applying compression or layering in the sub-bass range.
</p>
</section>