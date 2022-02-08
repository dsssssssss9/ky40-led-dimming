/**
 * Use KY-40 Rotary Encoder to alter brightness of External LED
 * 
 * using analogue output of Micro:Bit - sort of simple PWM
 * 
 * -------------------------------------------------------------------------------------
 * 
 * Uses KY-40 Extension by M Klein...
 * 
 * https://github.com/MKleinSB/pxt-KY-040
 * 
 * ------------------------------------------------------------------
 * 
 * Led connected to PIN0 & GND via a 470Ω resistor to limit current
 * 
 * -----------------------------------------------------------------------------
 * 
 * KY-40 Encoder connected  as follows.....
 * 
 * GND  ----->    GND
 * 
 * +        ----->    3v
 * 
 * CLK   ----->    PIN14
 * 
 * DT    ----->     PIN15
 * 
 * SW     *NOT USED*
 * 
 * ------------------------------------------------------
 * 
 * MIN_B    =   Minimum LED brightness
 * 
 * Max_B    =   Maximum LED Brightness
 * 
 * Act_B      =   Current displayed LED Brightness
 * 
 * B_Step    =   Amount to alter brightness per click of the Encoder
 * 
 * ---------------------------------------------------------------------------------------------
 * 
 * When Max / Min Brightness level is reached value will not go higher/lower & Micro:Bit Display informs user they have reached Max/Min level
 */
KY040.onTurned(direction.clockwise, function () {
    Act_B += B_Step * -1
    if (Act_B <= Min_B) {
        Act_B = Min_B
        basic.showString("Min")
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
KY040.onTurned(direction.counterclockwise, function () {
    Act_B += B_Step
    if (Act_B >= Max_B) {
        Act_B = Max_B
        basic.showString("Max")
    }
    pins.analogWritePin(AnalogPin.P0, Act_B)
})
let B_Step = 0
let Act_B = 0
let Max_B = 0
let Min_B = 0
basic.showIcon(IconNames.Happy)
KY040.setKY040(DigitalPin.P14, DigitalPin.P15)
Min_B = 0
Max_B = 1023
Act_B = 0
B_Step = 63
pins.analogWritePin(AnalogPin.P0, Act_B)
