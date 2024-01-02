<script>
//import { useSamples, themeSelect } from './store.js';

    let selectedTheme;
    let selectedState;
  
    const themes = ['ableish', 'frooty', 'logikal', 'reazoned', 'scythe'];
    const states = ['ms', 'samples'];
  
    function handleThemeChange(event) {
      selectedTheme = event.target.value;
      // handle theme change
    }
  
    function handleStateChange(event) {
      selectedState = event.target.value;
      // handle state change
    }
  </script>
  
  <div class="settings-menu">
    <img id="menu-gear-icon" class="menu-gear-icon" src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Gear_%2889033%29_-_The_Noun_Project.svg" />
    <input type="checkbox" id="menu-gear" class="menu-gear" name="menu-gear" />
    <menu>
        <li>
  <select bind:value={selectedTheme} on:change={handleThemeChange}>
    <option disabled selected value> Themes </option>
    {#each themes as theme}
      <option>{theme}</option>
    {/each}
  </select>
  <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Paint_Brush_-_The_Noun_Project.svg" />
  </li>
  <li>
    <fieldset>
        <legend>Timing units:</legend>
      
        <div>
          <input type="radio" id="unitsMs" name="time" value="unitsMs" checked />
          <label for="unitsMs">ms</label>
        </div>
      
        <div>
          <input type="radio" id="unitsSamples" name="time" value="unitsSamples" />
          <label for="unitsSamples">samples</label>
        </div>
      </fieldset>
      <p style="color: red;">This feature is not functional yet.</p>
  </li>
  <menu>

</div>