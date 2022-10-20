let distance = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    distance = Rover.Ultrasonic()
    if (distance >= 15) {
        Rover.Move(75)
        basic.showIcon(IconNames.Yes)
    } else {
        Rover.MotorRunDual(-75, 75)
        basic.showIcon(IconNames.No)
    }
})
