input.onButtonPressed(Button.A, function () {
    Act_B += B_Step
    if (Act_B >= Max_B) {
        Act_B = Max_B
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 256)
})
let B_Step = 0
let Act_B = 0
let Max_B = 0
basic.showIcon(IconNames.No)
let Min_B = 0
Max_B = 1023
Act_B = 0
B_Step = 10
pins.analogWritePin(AnalogPin.P0, Act_B)
basic.forever(function () {
	
})
