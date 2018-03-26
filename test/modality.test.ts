import * as Typings from "@4th-law/typings"
import chai = require("chai")
import mocha = require("mocha")
const expect = chai.expect
const assert = chai.assert
const should = chai.should()

import modality from "../index"

let system: any

const hookBefore = () => {
  system = new modality()
  system.localWeights = [0]
}

const hookAfter = () => {
  // code...
}

describe("Modality Template", () => {
  before(hookBefore)
  after(hookAfter)

  it("should return info about the modality when the info function is called", (done) => {
    const info = system.info
    assert.typeOf(info.baseType, "string")
    assert.typeOf(info.make, "string")
    assert.typeOf(info.model, "string")
    assert.typeOf(info.id, "string")
    assert.typeOf(info.version, "string")
    done()
  })

  it("should return the local weights of this modality", (done) => {
    assert.isArray(system.localWeights)
    done()
  })

  it("should return the error of this modality", (done) => {
    assert.typeOf(system.error, "object")
    done()
  })

  it("should return the state of this modality", (done) => {
    assert.typeOf(system.state, "object")
    done()
  })

  it("should translate an input command into an output command", (done) => {
    const inputCommand = {timestamp: 0, userCommand: [0], }
    const outputCommand = system.translate(inputCommand)[0]
    assert.typeOf(outputCommand.timestamp, "number")
    assert.typeOf(outputCommand.routerID, "string")
    assert.isArray(outputCommand.actuatorInput)
    done()
  })
})
