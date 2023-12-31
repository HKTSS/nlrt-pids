<script lang="ts">
  import Titlebar from './pids/title.svelte'
  import Eta from './pids/eta.svelte'
  export let stnId: string;
  export let platform: number;
  export let timeMode: string;
</script>
<Titlebar stnId={stnId} platform={platform} on:showConfig />
<Eta stnId={stnId} targetPlatform={platform} {timeMode} />