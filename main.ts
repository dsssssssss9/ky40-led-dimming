input.onButtonPressed(Button.A, function () {
    Act_B += B_Step
    if (Act_B >= Max_B) {
        Act_B = Max_B
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
input.onButtonPressed(Button.B, function () {
    Act_B += B_Step * -1
    if (Act_B <= Min_B) {
        Act_B = Min_B
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
let B_Step = 0
let Act_B = 0
let Max_B = 0
let Min_B = 0
basic.showIcon(IconNames.Giraffe)
Min_B = 0
Max_B = 1023
Act_B = 0
B_Step = 63
pins.analogWritePin(AnalogPin.P0, Act_B)
