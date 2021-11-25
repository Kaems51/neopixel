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
basic.forever(function () {
    basic.pause(100)
    strip.rotate(retning)
    strip.show()
})
