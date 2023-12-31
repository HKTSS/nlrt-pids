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
        <tr>
            <td>
                <span class="sizeZH">車站</span><br><span class="sizeEN">Station</span>
            </td>
            <td>
                <select id="stnOpt" bind:value={stationId}>
                    {#each [...StationCodeList] as [stnId, station]}
                        <option value={stnId}>{station.name.replace("|", " ")}</option>
                    {/each}
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <span class="sizeZH">月台</span><br><span class="sizeEN">Platform</span>
            </td>
            <td>
                <select id="platOpt" bind:value={selectedPlatform}>
                    {#each StationCodeList.get(stationId)?.platforms ?? [] as plat}
                        <option value={plat}>{plat}</option>
                    {/each}
                </select>
            </td>
        </tr>
        <tr>
            <td>
                <span class="sizeZH">全螢幕</span><br><span class="sizeEN">Full Screen</span>
            </td>
            <td>
                <input type="checkbox" bind:checked={useHorizontal} on:click={() => useHorizontal = !useHorizontal}>
            </td>
        </tr>
        <tr>
            <td>
                <span class="sizeZH">時間顯示</span><br><span class="sizeEN">Time Display</span>
            </td>
            <td>
                <select bind:value={timeMode}>
                    <option value="relative">預計到達時間 ETA</option>
                    <option value="absolute">時間 Time</option>
                </select>
            </td>
        </tr>
    </table>
    <button class="closeBtn" on:click>開始 Start</button>
    <p>如需要再顯示此菜單，請按頂部的車站名</p>
    <p>Click the station name at the top to return to this menu.</p>
</main>

<footer>
    <p><a href="https://hktss.github.io/mtr-pids/" target="_blank" rel="noopener noreferrer">願景資訊顯示屏模擬器<br>Railway Vision PIDS Simulator</a></p>
    <a href="https://hktss.github.io/" target="_blank" rel="noopener noreferrer"><img class="logo" src="img/tss_logo.png" alt="HKTSS Logo" height=40></a>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&family=Noto+Serif+HK:wght@600&display=swap');

    main {
        font-family: "Myriad Pro", "Noto Sans", "Noto Serif HK";
        background-color: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(6px);
        font-size: 18px;
        padding: 10px;
        text-align: center;
        height: 100%;
    }

    footer {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: end;
        position: absolute;
        bottom: 0;
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
        font-size: 16px;
        margin: 15px;
        transition: 0.2s;
    }

    button:hover, select:hover {
        box-shadow: 0px 0px 6px #555;
    }

    #cfgTable {
        border-spacing: 0 10px;
        margin: auto;
    }

    #cfgTable > tr {
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
    }

    #cfgTable > tr > td {
        padding: 5px;
    }

    #cfgTable > tr > td:nth-child(1) {
        text-align: right;
    }

    #cfgTable > tr > td:nth-child(2) {
        text-align: left;
    }

    .sizeZH {
        font-size: 2em;
    }

    .sizeEN {
        font-size: 1.5em;
    }

    .closeBtn {
        width: 80%;
        font-size: 18px;
        background-color: #77CCFF;
    }

    @media screen and ( max-height: 699px ) {
        main, footer {
            font-size: 0.75em;
        }
    }
</style>