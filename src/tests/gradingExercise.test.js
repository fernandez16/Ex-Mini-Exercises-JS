import { howDidIDo } from "../exercises/gradingExercise.js";

describe('Grading exercise test', () => {

    test('Given 0-3 it should return "Muy deficiente"', () => {

        var grade = 0

        var result = howDidIDo(grade)

        expect(result).toEqual("Muy deficiente");

    });

    test('Given 3-5 it should return "Insuficiente"', () => {

        var grade = 3

        var result = howDidIDo(grade)

        expect(result).toEqual("Insuficiente");

    });

    test('Given 5-6 it should return "Suficiente"', () => {

        var grade = 5

        var result = howDidIDo(grade)

        expect(result).toEqual("Suficiente");

    });

    test('Given 6-7 it should return "Bien"', () => {

        var grade = 6

        var result = howDidIDo(grade)

        expect(result).toEqual("Bien");

    });

    test('Given 7-9 it should return "Notable"', () => {

        var grade = 7

        var result = howDidIDo(grade)

        expect(result).toEqual("Notable");

    });

    test('Given 9-10 it should return "Sobresaliente"', () => {

        var grade = 9

        var result = howDidIDo(grade)

        expect(result).toEqual("Sobresaliente");

    });

    test('Given anything other than a number between 0 and 10 should return "error"', () => {

        var grade = "asihjdgfoiyasdgfipyasgflakhsdgflk"

        var result = howDidIDo(grade)

        expect(result).toEqual("error");

    });

});

