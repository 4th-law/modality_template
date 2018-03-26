import * as Typings from "@4th-law/typings"

export default class ModalityTemplate extends Typings.Modality {
  protected _baseType: string
  protected _make: string
  protected _model: string
  protected _id: string
  protected _version: string
  protected _platformID: string
  protected _state: NModalities.IState
  protected _error: NModalities.IError
  protected _userCommand: NModalities.IControlCommand

  constructor() {
    super()
    this._baseType = "baseType"
    this._make = "make"
    this._model = "model"
    this._id = "id"
    this._version = "v0.1.0"
    this._platformID = "plastformID"
    this._state = {timestamp: 0, vector: [0], } as NModalities.IState
    this._error = {timestamp: 0, vector: [0], } as NModalities.IError
    this._userCommand = {timestamp: 0, userCommand: [0], } as NModalities.IControlCommand
  }

  public translate(controlCommand: NModalities.IControlCommand): NModalities.IActuatorCommand[] {
    const value = {timestamp: 0, routerID: "0", actuatorInput: [0], }
    const returnValue = [value] as NModalities.IActuatorCommand[]
    return returnValue
  }
}
