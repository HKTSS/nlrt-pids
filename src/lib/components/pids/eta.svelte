<script lang="ts">
  import { onMount } from 'svelte';
  import { getApiURL, ArrivalEntry } from '../../data';

  export let stnId : string;
  export let targetPlatform : number;
  export let timeMode: string;
  let etaData: ArrivalEntry[] = [];
  const DisplayedArrivalRow = 10;

  async function fetchData(stnId: string, targetPlatform: number) {
    if(stnId == null || targetPlatform == null) return;
    let resp;
    try {
      resp = await fetch(getApiURL(stnId));
    } catch {
        console.error("Failed to fetch ETA data!");
        return null;
    }

    let data = await resp.json();

    /* Only status 1 should be valid */
    if(data.status != 1) return;

    let entries: ArrivalEntry[] = [];
    for(let platform of data.platform_list) {
      if(platform.platform_id !== targetPlatform) continue;
      
      for(let rawEntry of platform.route_list) {
          /* Line stopped */
          if(rawEntry.stop === 1) continue;
          let timetext: string;
          let timenum: string;

          if(rawEntry.time_en.includes("min")) {
            timetext = "分鐘|min";
            timenum = rawEntry.time_en.split(" min")[0];
          } else if (rawEntry.time_en === "-") {
            timetext = "\xa0|\xa0";
            timenum = "-";
          } else {
            timenum = "";
            timetext = `${rawEntry.time_ch}|${rawEntry.time_en}`;
          }
          
          let timeMsOffset = (parseInt(timenum) || 0) * 1000 * 60;
          let etaDate = new Date(new Date().getTime() + (timeMsOffset));

          let entry = new ArrivalEntry(rawEntry.route_no, rawEntry.train_length, rawEntry.dest_ch, rawEntry.dest_en, timenum, timetext, etaDate);
          entries.push(entry);
      }
    }
    etaData = entries;
  }

  $: fetchData(stnId, targetPlatform);

  onMount(() => {
    const fetchInterval = setInterval(async() => await fetchData(stnId, targetPlatform), 10000);
    return () => clearInterval(fetchInterval);
  });
</script>

<main>
    <div class="row header">
        <div><span class="sizeZH">路線</span><br>Route</div>
        <div><span class="sizeZH">目的地</span><br>Destination</div>
        <div></div>
        <div><span class="sizeZH">下班車</span><br>Next Train</div>
    </div>

      {#each {length: DisplayedArrivalRow} as _, i}
        {#if i < etaData.length}
          <div class="row arrRow">
            <div class="sizeDouble">{etaData[i].route_no}</div>
            <div><span class="sizeZH">{etaData[i].dest_zh}</span><br>{etaData[i].dest_en}</div>
            <div class="cars">
              {#each {length: etaData[i].train_length} as _, i}
              <img class="car" src="img/lrv.png" alt="LRV Car {i}">
              {/each}
            </div>
            <div>
              {#if timeMode == "relative"}
                <span class="sizeDouble multiLine">{etaData[i].time_num}</span>
                <div class="eta">{etaData[i].time_text.split("|")[0]}<br>{etaData[i].time_text.split("|")[1]}</div>
              {:else}
              <span class="sizeDouble multiLine">{String(etaData[i].eta_date.getHours()).padStart(2, "0")}:{String(etaData[i].eta_date.getMinutes()).padStart(2, "0")}</span>
              {/if}
            </div>
          </div>
        {:else}
          <div class="arrRow">
            <div class="sizeDouble">&nbsp;</div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        {/if}
      {/each}
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&family=Noto+Serif+HK:wght@600&display=swap');
  :root {
      --font-family: "Myriad Pro", "Noto Sans", "Noto Serif HK";
      --aqua: #C7EBFB;
      --title-color: #153156;
  }

  main {
      background-color: #FFF;
      overflow-y: hidden;
  }

  main {
      font-size: 2.2vh;
      font-family: var(--font-family);
      font-weight: 600;
  }

  .arrRow:nth-child(2n+1) {
      background-color: #FFF8F2;
      border: 1px solid lightgray;
  }

  .header {
      font-family: var(--font-family);
      font-size: 1.5vh;
      background-color: lightgray;
  }

  .row {
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 0 2%;
  }

  .arrRow {
      height: 8.8333vh;
  }

  .row > div:nth-child(1) {
    width: 20%;
  }

  .row > div:nth-child(2) {
    white-space: nowrap;
    width: 40%;
  }

  .row > div:nth-child(3) {
    width: 20%;
  }

  .cars {
    display: flex;
    justify-content: flex-end;
    text-align: right;
  }

  .row > div:last-child {
    text-align: right;
    margin-left: auto;
  }

  .arrRow > div:last-child {
    display: flex;
    align-items: center;
    min-width: max-content;
  }

  .car {
    float: right;
    width: 6vh;
  }

  .multiLine {
    margin: 5px;
    vertical-align: middle;
  }

  .sizeZH {
      font-size: 1.45em;
  }

  .sizeDouble {
      font-size: 2em;
  }
</style>