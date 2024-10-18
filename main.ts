/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program takes distance
*/

let distanceToObject:number = 0

//clearing
basic.showIcon(IconNames.Happy)

//finding distance and displaying it
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P15, 
        DigitalPin.P14, 
        PingUnit.Centimeters
    )

    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})
