<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
    import { StationCodeList } from "../../data";
    export let stnId: string;
    export let platform: Number;
    const dispatch = createEventDispatcher();
    let date: Date = new Date();
    let hour: string;
    let minutes: string;
    let stnZH: string;
    let stnEN: string;
    $: hour = date.getHours().toString().padStart(2, "0");
    $: minutes = date.getMinutes().toString().padStart(2, "0");
    $: stnZH = StationCodeList.get(stnId)?.name.split("|")[0] || "";
    $: stnEN = StationCodeList.get(stnId)?.name.split("|")[1] || "";

    function showConfigMenu() {
        dispatch('showConfig');
    }

    export function updateDate() {
        date = new Date();
    }

    onMount(() => {
        const interval = setInterval(updateDate, 2000);
        updateDate();

        return () => clearInterval(interval);
    })
</script>
<div id="titlebar">
    <table id="titlebarTB">
        <tr>
            <td class="platformCell">
                <span class="platcircle">{platform}</span>
                <div class="plattext">月台<br>Platform</div>
            </td>
            <td class="stnName" title="Show Config Menu">
                <button class="non-styled-btn" on:click={showConfigMenu} on:keypress={showConfigMenu}>
                    <span class="sizeZH">{stnZH || "站名"}</span><br>
                    <span class="en">{stnEN || "Station Name"}</span>
                </button>
            </td>
            <td class="clock">
                {hour}:{minutes}
            </td>
        </tr>
    </table>
</div>
  
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&family=Noto+Serif+HK:wght@600&display=swap');
    :root {
        --font-family: "Myriad Pro", "Noto Sans", "Noto Serif HK";
        --aqua: #C7EBFB;
        --title-color: #153156;
    }
  
    td {
        vertical-align: middle;
        padding: 5px;
    }
  
    #titlebar {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 2.5vh;
        background-color: var(--title-color);
        color: white;
        padding: 0 1%;
    }
  
    #titlebarTB {
        width: 100%;
        border-spacing: 15px;
        width: 100%;
    }
  
    .sizeZH {
        font-size: 1.45em;
    }
  
    .platcircle {
        float: left;
        margin: 0 5px;
        padding: 0.7vh;
        text-align: center;
        font-size: 1.3em;
        color: black;
        background-color: #D3A809;
        width: 1em;
        border-radius: 50%;
    }

    .stnName {
        text-align: center;
    }

    .clock {
        text-align: right;
        font-size: 2em;
    }
  
    .plattext {
        white-space: nowrap;
        vertical-align: middle;
    }

    .non-styled-btn {
        all: unset;
        cursor: pointer;
    }
</style>