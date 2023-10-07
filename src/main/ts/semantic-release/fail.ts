export function fail(): void {
  setOutput(success.KEY, success.FALSE);
}

export default fail;

import { setOutput } from "@actions/core";
import { success } from "./success";
