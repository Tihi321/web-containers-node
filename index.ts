import { WebContainer } from "@webcontainer/api";
import { files } from "./files";

const getRootElement = document.getElementById("get-root");

window.addEventListener("load", async () => {
  // Call only once
  const webcontainerInstance = await WebContainer.boot();
  await webcontainerInstance.mount(files);

  await webcontainerInstance.fs.readFile("package.json", "utf-8");

  const installProcess = await webcontainerInstance.spawn("yarn", ["install"]);

  if ((await installProcess.exit) !== 0) {
    throw new Error("Installation failed");
  }

  getRootElement?.addEventListener("click", async () => {
    const fetchingProcess = await webcontainerInstance.spawn("node", ["index.js"]);

    fetchingProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log(data);
        },
      })
    );
  });
});
