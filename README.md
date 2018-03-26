# Modality Template

This is a modality template, it's meant to provide a framework for developing your own 4th Law modality for controlling a phsyical platform, such as a drone or robot.

Fleshing out this template should leave you with a node module that can be imported into the 4th Law framework. The scripts you need to do this have already been included in the package.json

The default export (and thus all functions that need to be accessible through the profile) should be included in the index.ts file. Any tests you want to run for validation should be inside of the profile.test.ts file, inside of the test folder.

Any non-javascript/typescript code that you need to run your profile should be included in the project folder, you will need to establish the correct linking between this code and the ts/js code that defines the module.

Modalities are more complex than profiles, they have the following variables:
protected \_baseType: a string variable which holds the type of modality being used, such as "DRONE" or "CAR"
protected \_make: a string variable which holds the manufacturer name (e.g. Ford)
protected \_model: a string variable which holds the model type (e.g. F150)
protected \_id: a string variable holding the modality's id (if you have multiple kinds of car modalities, for instance)
protected \_version: a string variable holding the modality's version
protected \_platformID: a string variable identifying a specific platform (like a car's VIN)
protected \_state: an NModalities.IState variable representing the state of the system
protected \_error: an NModalities.IError variable representing the error of measured state
protected \_userCommand: an NModalities.IControlCommand variable that holds command values for an actuator
private \_localWeights: an array of numbers, used as local parameters for the modality, usefull if your modality is adaptive and thus will start to differ from the base modality.

Note that NModalities.IState, NModalities.IError, and NModalities.IControlCommand can all be found in the 4th-law typings module. Each of these is simply an array of numbers and a timestamp.

Modalities have several functions: info(), get localWeights(), set localWeights(), get state(), set state(), get error(), set error(), and translate(). translate() is the only function you need to worry about, the others have already been defined (though their uses will be described below).

the get info() function [ called as info = modality.info ] returns an NModalities.IInfo object, which has the form
```
{
  baseType: this._baseType,
  make: this._make,
  model: this._model,
  version: this._version,
  id: this._id,
}
```

get localWeights() [ called as localWeights = modality.localWeights ] returns the \_localWeights variable

set localWeights() [ called as modality.localWeights = localWeights ] is used to change the \_localWeights variable

get state() [ called as state = modality.state ] returns the \_state variable

set state() [ called as modality.state = state ] is used to change the \_state variable

get error() [ called as error = modality.error ] returns the \_error variable

set error() [ called as modality.error = error ] is used to change the \_error variable

The translate function is supposed to take in an NModalities.IControlCommand and output an NModalities.IActuatorCommand, which is then sent to the actual actuators. This function must be instantiated by you, and the internal logic written by you. The \_localWeights variable can be used to hold parameters for this function.
