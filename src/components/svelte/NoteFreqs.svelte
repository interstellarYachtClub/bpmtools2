<script>
const FREQTABLE = [
    { note: 'C', freq: 16.4, range: 'sub bass'},
    { note: 'C# / Db', freq: 17.3, range: 'sub bass' },
    { note: 'D', freq: 18.4, range: 'sub bass'  },
    { note: 'D# / Eb', freq: 19.4, range: 'sub bass'  },
    { note: 'E', freq: 20.6, range: 'sub bass'  },
    { note: 'F', freq: 21.8, range: 'sub bass'  },
    { note: 'F# / Gb', freq: 23.1, range: 'sub bass'  },
    { note: 'G', freq: 24.5, range: 'sub bass'  },
    { note: 'G# / Ab', freq: 26.0, range: 'sub bass'  },
    { note: 'A', freq: 27.5, range: 'sub bass'  },
    { note: 'A# / Bb', freq: 29.1, range: 'sub bass'  },
    { note: 'B', freq: 30.9, range: 'sub bass'  },
    { note: 'C', freq: 32.7, range: 'sub bass'  },
    { note: 'C# / Db', freq: 34.6, range: 'sub bass'  },
    { note: 'D', freq: 36.7, range: 'sub bass'  },
    { note: 'D# / Eb', freq: 38.9, range: 'sub bass'  },
    { note: 'E', freq: 41.2, range: 'sub bass'  },
    { note: 'F', freq: 43.6, range: 'sub bass'  },
    { note: 'F# / Gb', freq: 46.3, range: 'sub bass'  },
    { note: 'G', freq: 49.0, range: 'sub bass'  },
    { note: 'G# / Ab', freq: 51.9, range: 'sub bass'  },
    { note: 'A', freq: 55.0, range: 'sub bass'  },
    { note: 'A# / Bb', freq: 58.3, range: 'sub bass'  },
    { note: 'B', freq: 61.7, range: 'sub bass'  },
    { note: 'C', freq: 65.4, range: 'bass'  },
    { note: 'C# / Db', freq: 69.3, range: 'bass'  },
    { note: 'D', freq: 73.4, range: 'bass'  },
    { note: 'D# / Eb', freq: 77.8, range: 'bass'  },
    { note: 'E', freq: 82.4, range: 'bass'  },
    { note: 'F', freq: 87.3, range: 'bass'  },
    { note: 'F# / Gb', freq: 92.5, range: 'bass'  },
    { note: 'G', freq: 98.0, range: 'bass'  },
    { note: 'G# / Ab', freq: 103.8, range: 'bass'  },
    { note: 'A', freq: 110.0, range: 'bass'  },
    { note: 'A# / Bb', freq: 116.5, range: 'bass'  },
    { note: 'B', freq: 123.5, range: 'bass'  },
    { note: 'C', freq: 130.8, range: 'upper bass'  },
    { note: 'C# / Db', freq: 138.6, range: 'upper bass'  },
    { note: 'D', freq: 146.8, range: 'upper bass'  },
    { note: 'D# / Eb', freq: 155.6, range: 'upper bass'  },
    { note: 'E', freq: 164.8, range: 'upper bass'  },
    { note: 'F', freq: 174.6, range: 'upper bass'  },
    { note: 'F# / Gb', freq: 185.0, range: 'upper bass'  },
    { note: 'G', freq: 196.0, range: 'upper bass'  },
    { note: 'G# / Ab', freq: 207.7, range: 'upper bass'  },
    { note: 'A', freq: 220.0, range: 'upper bass'  },
    { note: 'A# / Bb', freq: 233.1, range: 'upper bass'  },
    { note: 'B', freq: 246.9, range: 'upper bass'  },
    { note: 'C', freq: 261.6, range: 'lower midrange'  },
    { note: 'C# / Db', freq: 277.2, range: 'lower midrange'  },
    { note: 'D', freq: 293.7, range: 'lower midrange'  },
    { note: 'D# / Eb', freq: 311.1, range: 'lower midrange'  },
    { note: 'E', freq: 329.6, range: 'lower midrange'  },
    { note: 'F', freq: 349.2, range: 'lower midrange'  },
    { note: 'F# / Gb', freq: 370.0, range: 'lower midrange'  },
    { note: 'G', freq: 392.0, range: 'lower midrange'  },
    { note: 'G# / Ab', freq: 415.3, range: 'lower midrange'  },
    { note: 'A', freq: 440.0, range: 'lower midrange'  },
    { note: 'A# / Bb', freq: 466.2, range: 'lower midrange'  },
    { note: 'B', freq: 493.9, range: 'lower midrange'  },
    { note: 'C', freq: 523.3, range: 'middle midrange'  },
    { note: 'C# / Db', freq: 554.4, range: 'middle midrange'  },
    { note: 'D', freq: 587.3, range: 'middle midrange'  },
    { note: 'D# / Eb', freq: 622.3, range: 'middle midrange'  },
    { note: 'E', freq: 659.3, range: 'middle midrange'  },
    { note: 'F', freq: 698.5, range: 'middle midrange'  },
    { note: 'F# / Gb', freq: 740.0, range: 'middle midrange'  },
    { note: 'G', freq: 784.0, range: 'middle midrange'  },
    { note: 'G# / Ab', freq: 830.6, range: 'middle midrange'  },
    { note: 'A', freq: 880.0, range: 'middle midrange'  },
    { note: 'A# / Bb', freq: 923.3, range: 'middle midrange'  },
    { note: 'B', freq: 987.8, range: 'middle midrange'  },
    { note: 'C', freq: 1046.5, range: 'upper midrange'  },
    { note: 'C# / Db', freq: 1108.7, range: 'upper midrange'  },
    { note: 'D', freq: 1174.7, range: 'upper midrange'  },
    { note: 'D# / Eb', freq: 1244.5, range: 'upper midrange'  },
    { note: 'E', freq: 1318.5, range: 'upper midrange'  },
    { note: 'F', freq: 1396.9, range: 'upper midrange'  },
    { note: 'F# / Gb', freq: 1480.0, range: 'upper midrange'  },
    { note: 'G', freq: 1568.0, range: 'upper midrange'  },
    { note: 'G# / Ab', freq: 1661.2, range: 'upper midrange'  },
    { note: 'A', freq: 1760.0, range: 'upper midrange'  },
    { note: 'A# / Bb', freq: 1864.7, range: 'upper midrange'  },
    { note: 'B', freq: 1975.5, range: 'upper midrange'  },
    { note: 'C', freq: 2093.0, range: 'present midrange'  },
    { note: 'C# / Db', freq: 2217.5, range: 'present midrange'  },
    { note: 'D', freq: 2349.3, range: 'present midrange'  },
    { note: 'D# / Eb', freq: 2489.0, range: 'present midrange'  },
    { note: 'E', freq: 2637.0, range: 'present midrange'  },
    { note: 'F', freq: 2793.8, range: 'present midrange'  },
    { note: 'F# / Gb', freq: 2960.0, range: 'present midrange'  },
    { note: 'G', freq: 3136.0, range: 'present midrange'  },
    { note: 'G# / Ab', freq: 3322.4, range: 'present midrange'  },
    { note: 'A', freq: 3520.0, range: 'present midrange'  },
    { note: 'A# / Bb', freq: 3729.3, range: 'present midrange'  },
    { note: 'B', freq: 3951.1, range: 'present midrange'  },
    { note: 'C', freq: 4186.0, range: 'high end'  },
    { note: 'C# / Db', freq: 4434.9, range: 'high end'  },
    { note: 'D', freq: 4698.6, range: 'high end'  },
    { note: 'D# / Eb', freq: 4978.0, range: 'high end'  },
    { note: 'E', freq: 5274.0, range: 'high end'  },
    { note: 'F', freq: 5587.6, range: 'high end'  },
    { note: 'F# / Gb', freq: 5919.9, range: 'high end'  },
    { note: 'G', freq: 6271.9, range: 'high end'  },
    { note: 'G# / Ab', freq: 6644.9, range: 'high end'  },
    { note: 'A', freq: 7040.0, range: 'high end'  },
    { note: 'A# / Bb', freq: 7458.6, range: 'high end'  },
    { note: 'B', freq: 7902.1, range: 'high end'  },
]
</script>
<section class="note-frequencies">
    <table>
        <thead>
            <tr>
                <th>
                    Note (A4 = 440)
                </th>
                <th>
                    Frequency (Hz)
                </th>
                <th>
                    Range
                </th>
            </tr>
        </thead>
        <tbody>
            {#each FREQTABLE as row, index (row.note)}
            <tr>
                <td>
                    {row.note}<sub>{Math.floor(index / 12)}</sub>
                </td>
                <td>
                    {row.freq} <text class="table-units">Hz</text>
                </td>
                <td>{row.range}</td>
            </tr>

            {/each}
        </tbody>
    </table>
    <p>A table of musical notes and their corresponding frequencies (when A=440). This is useful for instrumentation ranges and EQing. It is generally best practice to roll off the lows between 20 and 40 Hertz.</p>

</section>