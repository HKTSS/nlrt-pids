<script lang="ts">
    import { StationCodeList } from '../data';
    export let stationId: string;
    export let selectedPlatform: number;
    export let useHorizontal: boolean;
    export let timeMode: string;
</script>

<main>
    <h1 class="sizeZH">輕鐵資訊顯示屏模擬器</h1>
    <h3 class="sizeEN">Light Rail PIDS Simulator</h3>
    <hr>
    <table id="cfgTable">
        <tbody>
            <tr>
                <td>
                    <label class="sizeZH" for="station-selection">車站</label><br><label class="sizeEN" for="station-selection">Station</label>
                </td>
                <td>
                    <select id="station-selection" bind:value={stationId}>
                        {#each [...StationCodeList] as [stnId, station]}
                            <option value={stnId}>{station.name.replace("|", " ")}</option>
                        {/each}
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="sizeZH" for="platform-selection">月台</label><br><label class="sizeEN" for="platform-selection">Platform</label>
                </td>
                <td>
                    <select id="platform-selection" bind:value={selectedPlatform}>
                        {#each StationCodeList.get(stationId)?.platforms ?? [] as plat}
                            <option value={plat}>{plat}</option>
                        {/each}
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="sizeZH" for="fullscreen">全螢幕</label><br><label class="sizeEN" for="fullscreen">Full Screen</label>
                </td>
                <td>
                    <input id="fullscreen" type="checkbox" bind:checked={useHorizontal} on:click={() => useHorizontal = !useHorizontal}>
                </td>
            </tr>
            <tr>
                <td>
                    <label class="sizeZH" for="time-display">時間顯示</label><br><label class="sizeEN" for="time-display">Time Display</label>
                </td>
                <td>
                    <select id="time-display" bind:value={timeMode}>
                        <option value="relative">預計到達時間 ETA</option>
                        <option value="absolute">時間 Time</option>
                    </select>
                </td>
            </tr>
        </tbody>
    </table>
    <button class="closeBtn" on:click>開始 Start</button>
    <p>如需要再顯示此菜單，請按頂部的車站名</p>
    <p>Click the station name at the top to return to this menu.</p>
    <footer>
        <p><a href="https://hktss.github.io/mtr-pids/" target="_blank" rel="noopener noreferrer">願景資訊顯示屏模擬器<br>Railway Vision PIDS Simulator</a></p>
        <a href="https://hktss.github.io/" target="_blank" rel="noopener noreferrer"><img class="logo" src="img/tss_logo.png" alt="HKTSS Logo" height=40></a>
    </footer>
</main>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&family=Noto+Serif+HK:wght@600&display=swap');

    main {
        font-family: "Myriad Pro", "Noto Sans", "Noto Serif HK";
        background-color: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(6px);
        font-size: 1rem;
        padding: 0.5rem;
        text-align: center;
        height: 100%;
        overflow: auto;
    }

    footer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: left;
    }

    footer > * {
        margin: 20px;
    }

    button, select {
        font-family: "Myriad Pro", "Noto Sans", "Noto Serif TC";
        padding: 4px;
        background-color: #DDD;
        box-shadow: 0px 0px 12px #333;
        border: 0;
        border-radius: 8px;
        font-size: 1.15rem;
        transition: 0.2s;
    }

    input[type="checkbox"] {
        transform: scale(175%);
    }

    button:hover, select:hover {
        box-shadow: 0px 0px 6px #555;
    }

    #cfgTable {
        border-spacing: 0 10px;
        margin: auto;
    }

    #cfgTable tr {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }

    #cfgTable tr > td {
        padding: 5px;
    }

    #cfgTable tr > td:nth-child(1) {
        text-align: right;
    }

    #cfgTable tr > td:nth-child(2) {
        text-align: left;
        padding-left: 1rem;
    }

    .sizeZH {
        font-size: 2rem;
    }

    .sizeEN {
        font-size: 1.5rem;
    }

    .closeBtn {
        width: 80%;
        font-size: 1.25rem;
        background-color: #77CCFF;
        margin: 1.15rem;
    }

    @media screen and ( max-height: 699px ) {
        main, footer {
            font-size: 0.75rem;
        }
    }

    @media screen and ( max-width: 500px ) {
        #cfgTable tr {
            display: block;
            margin-top: 0rem;
        }

        #cfgTable tr > td {
            display: block;
            text-align: left;
        }

        #cfgTable tr > td:nth-child(1) {
            text-align: left;
        }
    }
</style>