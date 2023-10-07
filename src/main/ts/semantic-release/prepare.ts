export async function prepare(
  config: {
    changelogFile?: string;
  },
  context: PrepareContext
): Promise<void> {
  const path = config.changelogFile ?? prepare.DEFAULT_CHANGELOG_FILE;
  const text = await promises.readFile(path);
  context.logger.log(`Writing changelog to ${path} with contents:\n${text}`);
}

export namespace prepare {
  export const DEFAULT_CHANGELOG_FILE = "CHANGELOG.md";
}

export default prepare;

import { promises } from "fs";
import { PrepareContext } from "semantic-release";
