/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "@styles/variables.css";
import "@styles/global.css";

import { provider } from "./provider";
export const wrapRootElement = provider;
