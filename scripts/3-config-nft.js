import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3Cd0b940218955efD8BaE4B2d65A46010bB7e31C"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gift Box",
        description: "This NFT will give you access to Healme!",
        image: readFileSync("scripts/assets/giftbox.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
