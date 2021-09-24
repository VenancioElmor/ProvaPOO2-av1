class ConversaoDeUnidadesDeTempo {
  static MinutoParaSegundo(valor: number): string {
    return `${valor} Minutos correspondem a ${valor * 60} segundos`;
  }

  static HoraParaMinuto(valor: number): string {
    return `${valor} Horas correspondem a ${valor * 60} minutos`;
  }

  static DiaParaHora(valor: number): string {
    return `${valor} Dias correspondem a ${valor * 24} horas`;
  }

  static SemanaParaDia(valor: number): string {
    return `${valor} Semanas correspondem a ${valor * 7} dias `;
  }

  static MesParaDias(valor: number): string {
    return `${valor} Meses correspondem a ${valor * 30} dias`;
  }

  static AnoParaDias(valor: number): string {
    return `${valor} Anos correspondem a ${(valor * 365.25).toFixed(2)} dias`;
  }
}

console.log(ConversaoDeUnidadesDeTempo.AnoParaDias(3));
