<script lang="ts">
  import { onMount } from "svelte";
  import { types } from "@theatre/core";
  import TheatreTextBox from "../components/Hero/Intro/TheatreTextBox.svelte";
  import * as rive from "@rive-app/canvas";
  import { Sequence, createSheetObjectAction } from "@threlte/theatre";
  // import TextBox from '../components/TextBox.svelte';

  let r: rive.Rive | null = null;
  onMount(() => {
    let temp = new rive.Rive({
      src: "/gale.riv",
      // src: "basketball.riv",
      canvas: document.getElementById("canvas") as HTMLCanvasElement,
      stateMachines: "Load",
      autoplay: true,
      onLoad: () => {
        r = temp;
        r?.resizeDrawingSurfaceToCanvas();
      },
    });
  });

  const sheetObject = createSheetObjectAction();
</script>

<Sequence autoplay />
<div class="background">
  <TheatreTextBox key="hero">
    <div class="flex align-center justify-center">
      <canvas
        id="canvas"
        style="height: 300px;"
        use:sheetObject={{
          key: "hero_canvas",
          callback(_, props) {
            if (props.play) {
              r?.play();
            } else {
              r?.stop();
              r?.reset();
            }
          },
          props: {
            play: types.boolean(false),
          },
        }}
      ></canvas>
    </div>
  </TheatreTextBox>
  <TheatreTextBox key="title">
    <div class="mb-2 text-center text-xl text-gray-200 font-bold">
      Mare Island Technology Academy KidWind Club
    </div>
  </TheatreTextBox>
  <TheatreTextBox key="statement">
    <div class="mb-2 text-center text-xl text-gray-400">
      A high-precision, high-speed wind turbine for <span
        class="relative inline-block"
        ><div
          use:sheetObject={{
            key: "underline",
            props: {
              scaleX: types.number(0, {
                range: [0, 1],
              }),
            },
            callback(node, props) {
              node.style.transform = `scaleX(${props.scaleX})`;
            },
          }}
          class="bg-blue-900 absolute bottom-0 left-0 -z-10 h-4 w-full origin-left will-change-transform"
        />
        KidWind World 2024
      </span>
    </div>
  </TheatreTextBox>
</div>

<style>
  .background {
    width: 100vw;
    height: 100vh;
    background: rgb(13, 19, 32);
    background: linear-gradient(
      180deg,
      rgba(13, 19, 32, 1) 0%,
      rgba(8, 12, 21, 1) 100%
    );
  }

  :global(body) {
    overflow-x: hidden;
  }
</style>
