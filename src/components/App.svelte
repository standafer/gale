<script lang="ts">
  import { Project, Sequence, Sheet, Studio } from "@threlte/theatre";
  import state from "./state.json";
  import Scene from "./Scene.svelte";
</script>

<Studio />

<Project
  config={{
    state,
  }}
>
  <Sheet>
    <Sequence />
    <Scene />
  </Sheet>
</Project>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }
</style>
