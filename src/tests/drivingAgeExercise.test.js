import { canTheyDrive } from "../exercises/drivingAgeExercise.js";

describe('Age exercise tests', () => {

    test('Method canTheyDrive is checking if the given age is 18 or larger', () => {

        var age1 = 18
        var age2 = 20

        var result1 = canTheyDrive(age1)
        var result2 = canTheyDrive(age2)

        expect(result1).toEqual("Can drive");
        expect(result2).toEqual("Can drive");

    });

    test('Method canTheyDrive is checking if the given age is lower than 18', () => {

        var age = 15

        var result = canTheyDrive(age)

        expect(result).toEqual("Cannot drive");

    });

    test('Method canTheyDrive returns error if other than an Integer is given', () => {

        var age = "pepito"

        var result = canTheyDrive(age)

        expect(result).toEqual("Error");

    });

});

