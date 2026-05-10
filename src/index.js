class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentGuess = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    // Используем Math.round или (min + max) / 2 с коррекцией границ
    this.currentGuess = Math.round((this.min + this.max) / 2);
    return this.currentGuess;
  }

  lower() {
    // Если загаданное число меньше, текущая догадка становится новым максимумом
    this.max = this.currentGuess;
  }

  greater() {
    // Если загаданное число больше, текущая догадка становится новым минимумом
    this.min = this.currentGuess;
  }
}

module.exports = GuessingGame;
