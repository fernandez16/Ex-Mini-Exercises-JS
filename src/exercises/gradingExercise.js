export function howDidIDo(grade) {

  return grade >= 0 && grade < 3 ? "Muy deficiente"
    : grade >= 3 && grade < 5 ? "Insuficiente"
    : grade >= 5 && grade < 6 ? "Suficiente"
    : grade >= 6 && grade < 7 ? "Bien"
    : grade >= 7 && grade < 9 ? "Notable"
    : grade >= 9 && grade < 10 ? "Sobresaliente"
    : "error"
    
}
