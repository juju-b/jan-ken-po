input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        rock.showImage(0)
    }
    if (hand == 2) {
        paper.showImage(0)
    }
    if (hand == 3) {
        scissors.showImage(0)
    }
})
let hand = 0
let scissors: Image = null
let paper: Image = null
let rock: Image = null
rock = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    # # # # #
    `)
paper = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
scissors = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
