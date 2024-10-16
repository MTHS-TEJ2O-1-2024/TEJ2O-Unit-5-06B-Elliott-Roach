/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program takes distance
*/

let distanceInCentimeters:number = 0

//clearing
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//finding distance and displaying it
    input.onButtonPressed(Button.A, function () {
        basic.clearScreen()
        distanceInCentimeters = sonar.ping(
            DigitalPin.P1, 
            DigitalPin.P2, 
            PingUnit.Centimeters
        )
        basic.showNumber(distanceInCentimeters)
        pause(5000)
        basic.showIcon(IconNames.Happy)
    })
