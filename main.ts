input.onButtonPressed(Button.A, function () {
	
})
KY040.onTurned(direction.clockwise, function () {
    Act_B += B_Step
    if (Act_B >= Max_B) {
        Act_B = Max_B
        basic.showString("Max")
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
input.onButtonPressed(Button.B, function () {
    Act_B += B_Step * -1
    if (Act_B <= Min_B) {
        Act_B = Min_B
        basic.showString("Min")
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
let B_Step = 0
let Act_B = 0
let Max_B = 0
let Min_B = 0
basic.showIcon(IconNames.Pitchfork)
KY040.setKY040(DigitalPin.P14, DigitalPin.P15)
Min_B = 0
Max_B = 1023
Act_B = 0
B_Step = 63
pins.analogWritePin(AnalogPin.P0, Act_B)
