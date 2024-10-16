/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program takes distance
*/

let distanceInCentimeters: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

    input.onButtonPressed(Button.A, function () {
        distanceInCentimeters = sonar.ping(
            DigitalPin.P1, 
            DigitalPin.P2, 
            PingUnit.Centimeters
            )
        
        basic.showNumber(distanceInCentimeters)
        basic.showIcon(IconNames.Happy)
    })
