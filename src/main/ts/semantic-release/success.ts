export function success(
  _: unknown,
  context: {
    nextRelease: {
      version: string;
    };
  }
): void {
  setOutput(success.KEY, success.TRUE);
  setOutput("version", context.nextRelease.version);
}

export namespace success {
  export const KEY = "success";
  export const TRUE = "true";
  export const FALSE = "false";
}

export default success;

import { setOutput } from "@actions/core";
