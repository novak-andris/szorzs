let a = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a += 1
    if (a > 5) {
        a = 0
        led.unplot(0, 0)
        led.unplot(0, 1)
        led.unplot(0, 2)
        led.unplot(0, 3)
        led.unplot(0, 4)
    } else {
        for (let index = 0; index <= a - 1; index++) {
            led.plot(0, index)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    b += 1
    if (b > 5) {
        b = 0
        led.unplot(4, 0)
        led.unplot(4, 1)
        led.unplot(4, 2)
        led.unplot(4, 3)
        led.unplot(4, 4)
    } else {
        for (let index = 0; index <= b - 1; index++) {
            led.plot(4, index)
        }
    }
})
