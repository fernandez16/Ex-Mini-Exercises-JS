export function canTheyDrive(age) {
    if (age >= 18) {
        return "Can drive"
    } 

    else if (age < 18) {
        return "Cannot drive"
    } 

    else return "Error"
}
