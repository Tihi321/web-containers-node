import { WebContainer } from "@webcontainer/api";

const reportOutput = (output: string) => {
  console.log(output);
};

window.addEventListener("load", async () => {
  reportOutput("Booting WebContainer...");
  const container = await WebContainer.boot();
  console.log(container.workdir);
  reportOutput("Booting complete");
});
