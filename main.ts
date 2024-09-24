input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # # . .
            . # . # .
            `)
    } else if (tool == 1) {
        basic.showIcon(IconNames.Square)
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # # . .
            . # . . .
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
        basic.showLeds(`
            . . # # .
            . . # . .
            . . # # .
            . . . # .
            . . # # .
            `)
    }
})
let tool = 0
basic.showString("Ryans microbit ")
