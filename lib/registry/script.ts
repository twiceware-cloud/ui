import * as fs from "node:fs/promises";
import path from "path";
import { RegistryItem } from "shadcn/registry";

import { gsapComponentRegistries } from "./gsap-components";

// Registry paths
const REGISTRY_PATH = path.join(process.cwd(), "public/r/");
const GSAP_COMPONENT_REGISTRY_PATH = REGISTRY_PATH + "gsap/";

// Project source path
const SOURCE_PATH = path.join(process.cwd(), "/");

const buildRegistry = async (name: string, path: string, registries: RegistryItem[]) => {
    try {
        await fs.mkdir(path, { recursive: true });
    } catch (e) {
        console.info(e);
    }

    for (const item of registries) {
        const DEST = path + item.name + ".json";
        const newFiles = [];
        for (const file of item.files ?? []) {
            const content = await fs.readFile(SOURCE_PATH + `${name}/` + file.path, { encoding: "utf8" });
            newFiles.push({
                ...file,
                content,
            });
        }
        await fs.writeFile(DEST, JSON.stringify({ ...item, files: newFiles }), {
            encoding: "utf8",
        });
    }
};

const init = async () => {
    // registry:build - components/**
    await buildRegistry("components", GSAP_COMPONENT_REGISTRY_PATH, gsapComponentRegistries);
};

init().then(() => {
    console.log("✅ Done!");
});
