/** @satisfies {import('@webcontainer/api').FileSystemTree} */

export const files = {
  "index.js": {
    file: {
      contents: `
      import axios from "axios";

      axios
        .get("https://cdn.tihomir-selak.from.hr/rss/bug.xml")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
        `,
    },
  },
  "package.json": {
    file: {
      contents: `
        {
          "name": "example-app",
          "type": "module",
          "dependencies": {
            "axios": "latest"
          },
          "scripts": {
            "start": "node index.js"
          }
        }`,
    },
  },
};
