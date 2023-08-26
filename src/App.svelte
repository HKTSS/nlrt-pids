<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Pids from './lib/components/pids.svelte'
    import Config from './lib/components/config.svelte'
    let stnId: string;
    let platform: number;
    let useHorizontal: boolean = false;
    let showConfig: boolean = false;

    function getSavedData() {
        let savedPlat = localStorage.getItem("platform")
        let savedStn = localStorage.getItem("stnId");
        let savedHorizontal = localStorage.getItem("horizontal");
        if(savedPlat == null || savedStn == null) {
            stnId = "1";
            platform = 2;
            showConfig = true;
        } else {
            stnId = savedStn;
            platform = parseInt(savedPlat);
        }

        if(savedHorizontal == "true") {
            useHorizontal = true;
        }
    }

    function saveData(stationId: string, platformNum: number, horizontal: boolean) {
        if(stationId !== undefined) localStorage.setItem("stnId", stationId);
        if(platformNum !== undefined) localStorage.setItem("platform", platformNum.toString())
        localStorage.setItem("horizontal", String(horizontal))
    }

    function parseQuery() {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        if(params["stnId"] != null && params["plat"] != null) {
            showConfig = false;
            stnId = params["stnId"];
            platform = parseInt(params["plat"]);
        }
        if(params["horz"] != null) {
            useHorizontal = params["horz"] == "true";
        }
    }

    onMount(() => {
        getSavedData();
        parseQuery();
        saveData(stnId, platform, useHorizontal);
    });
</script>

<main>
    
    <div class="{useHorizontal ? "horizontal" : "portrait"}">
        <Pids {stnId} {platform} on:showConfig={() => showConfig = true}/>
    </div>

    {#if showConfig}
        <div transition:fade="{{ duration: 100 }}" class="{useHorizontal ? "horizontal" : "portrait"}">
            <Config bind:stationId={stnId} bind:selectedPlatform={platform} bind:useHorizontal on:click={() => {
                showConfig = false;
                saveData(stnId, platform, useHorizontal);
            }}/>
        </div>
    {/if}
</main>

<style>
    main {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
    }

    .portrait {
        position: absolute;
        height: 100%;
        overflow-y: hidden;
        left: 0;
        right: 0;
        margin: 0 auto;
        aspect-ratio: 10 / 16;
    }

    .horizontal {
        position: absolute;
        height: 100%;
        overflow-y: hidden;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
</style>