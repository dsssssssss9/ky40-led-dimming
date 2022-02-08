input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 256)
})
basic.showIcon(IconNames.No)
basic.forever(function () {
	
})
