input.onGesture(Gesture.Shake, function () {
    strip.clear()
    retning = 0
})
input.onButtonPressed(Button.A, function () {
    retning = 1
})
input.onGesture(Gesture.LogoUp, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.AB, function () {
    retning = 3
})
input.onButtonPressed(Button.B, function () {
    retning = -1
})
let strip: neopixel.Strip = null
let retning = 0
retning = 1
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(6, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(14, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Indigo))
strip.setPixelColor(16, neopixel.colors(NeoPixelColors.Indigo))
strip.setPixelColor(17, neopixel.colors(NeoPixelColors.Indigo))
strip.setPixelColor(18, neopixel.colors(NeoPixelColors.Violet))
strip.setPixelColor(19, neopixel.colors(NeoPixelColors.Violet))
strip.setPixelColor(20, neopixel.colors(NeoPixelColors.Violet))
strip.setPixelColor(21, neopixel.colors(NeoPixelColors.Purple))
strip.setPixelColor(22, neopixel.colors(NeoPixelColors.Purple))
strip.setPixelColor(23, neopixel.colors(NeoPixelColors.Purple))
strip.rotate(1)
basic.forever(function () {
    basic.pause(100)
    strip.rotate(retning)
    strip.show()
})
