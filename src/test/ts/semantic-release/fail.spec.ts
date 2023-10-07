import { fail, success } from "../../../main/ts";

describe(`#${fail.name}`, () => {
  it(`should output \`"${success.KEY}"\` variable with value set to \`"${success.FALSE}"\``, () => {
    const stub = sinon.stub(core, "setOutput");
    fail();
    assert.isTrue(stub.withArgs(success.KEY, success.FALSE).calledOnce);
  });

  afterEach(() => {
    sinon.restore();
  });
});

import sinon from "sinon";
import { assert } from "chai";
import * as core from "@actions/core";
