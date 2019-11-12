/*
Copyright 2019 XbyOrange

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

const index = require("../../index");

describe("index", () => {
  it("should export a Cli constructor", () => {
    expect(index.Cli).toBeDefined();
  });

  it("should export a Server constructor", () => {
    expect(typeof index.Server).toEqual("function");
  });

  it("should export a Feature constructor", () => {
    expect(typeof index.Feature).toEqual("function");
  });
});