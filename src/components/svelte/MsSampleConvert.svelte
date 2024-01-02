<script>
    let sampleRates = [44100, 48000, 96000];
    let selectedRate = sampleRates[0];
    let timeInMs = 0;
    let samples = 0;
  
    $: samples = timeInMs * selectedRate / 1000;
  </script>
  
  <select bind:value={selectedRate}>
    {#each sampleRates as rate (rate)}
      <option value={rate}>{rate}</option>
    {/each}
  </select>
  
  <input type="number" bind:value={timeInMs} placeholder="Time in ms" />
  
  <p>{samples} samples</p>