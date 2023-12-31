<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    import Pids from './lib/components/pids.svelte'
    import Config from './lib/components/config.svelte'
    let stnId: string;
    let platform: number;
    let useHorizontal = false;
    let showConfig = false;
    let timeMode = "relative";

    function getSavedData() {
        showConfig = localStorage.getItem("visited") == null;
        platform = parseInt(localStorage.getItem("platform")) || 2;
        stnId = localStorage.getItem("stnId") ?? "1";
        useHorizontal = localStorage.getItem("horizontal") === "true";
        timeMode = localStorage.getItem("timeMode") ?? "relative";
    }

    function saveData(stationId: string, platformNum: number, horizontal: boolean, timeMode: string) {
        localStorage.setItem("visited", String(true));
        localStorage.setItem("stnId", stationId);
        localStorage.setItem("platform", platformNum.toString())
        localStorage.setItem("horizontal", String(horizontal))
        localStorage.setItem("timeMode", timeMode);
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
            useHorizontal = params["horz"] === "true";
        }
    }

    onMount(() => {
        getSavedData();
        parseQuery();
        saveData(stnId, platform, useHorizontal, timeMode);
    });
</script>

<main>
    <div class="{useHorizontal ? "horizontal" : "portrait"}">
        <Pids {stnId} {platform} {timeMode} on:showConfig={() => showConfig = true}/>
    </div>

    {#if showConfig}
        <div transition:fade="{{ duration: 100 }}" class="{useHorizontal ? "horizontal" : "portrait"}">
            <Config bind:stationId={stnId} bind:selectedPlatform={platform} bind:useHorizontal bind:timeMode on:click={() => {
                showConfig = false;
                saveData(stnId, platform, useHorizontal, timeMode);
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