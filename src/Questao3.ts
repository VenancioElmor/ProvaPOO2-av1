class Funcionarios {
  constructor(
    private _nome: string,
    private _salariohora: number,
    private _diastrabalhados: number,
    private _totalfaltasano: number
  ) {}

  // gets
  get Nome() {
    return this._nome;
  }

  get Salariohora() {
    return this._salariohora;
  }

  get Diastrabalhados() {
    return this._diastrabalhados;
  }

  get Totaldefaltasano() {
    return this._totalfaltasano;
  }

  // Sets
  set setNome(nome: string) {
    this._nome = nome;
  }

  set setSalarioHora(salariohora: number) {
    this._salariohora = salariohora;
  }

  set setDiasTrabalhados(diastrabalhados: number) {
    this._diastrabalhados = diastrabalhados;
  }

  set setTotalFaltasAnos(totalfaltasano: number) {
    this._totalfaltasano = totalfaltasano;
  }

  // Método Salário Bruto
  public SalarioBruto(salariohora: number, diastrabalhados: number): number {
    let SalarioBruto = 0;
    return (SalarioBruto = salariohora * diastrabalhados);
  }

  // Método para calcular PLR
  public CalcularPLR(totalfaltasano: number) {
    const SalarioBruto = this.SalarioBruto(
      this._salariohora,
      this._diastrabalhados
    );
    if (totalfaltasano === 0) {
      return SalarioBruto;
    }
    if (totalfaltasano === 1) {
      return SalarioBruto * 0.94;
    }
    if (totalfaltasano === 2) {
      return SalarioBruto * 0.92;
    }
    if (totalfaltasano === 3) {
      return SalarioBruto * 0.9;
    }
    if (totalfaltasano === 4) {
      return SalarioBruto * 0.88;
    }
    if (totalfaltasano >= 5) {
      return 0;
    }
  }

  public Desconto(SalarioBruto: number) {
    return SalarioBruto * 0.05;
  }

  public SalarioLiquido(
    SalarioBruto: number,
    CalcularPLR: any,
    Desconto: number
  ) {
    return SalarioBruto - Desconto + CalcularPLR;
  }
}

const FuncionarioNovo = new Funcionarios("Venâncio", 15, 260, 5);

try {
  FuncionarioNovo.setNome = "Pedro";
  FuncionarioNovo.setSalarioHora = 20;
  FuncionarioNovo.setDiasTrabalhados = 250;
  FuncionarioNovo.setTotalFaltasAnos = 4;

  // SalarioBruto irá receber as informações do método SalarioBruto
  const SalarioBruto = FuncionarioNovo.SalarioBruto(
    FuncionarioNovo.Salariohora,
    FuncionarioNovo.Diastrabalhados
  );

  const PLR = FuncionarioNovo.CalcularPLR(FuncionarioNovo.Totaldefaltasano);

  const Desconto = FuncionarioNovo.Desconto(SalarioBruto);
  const SalarioLiquido = FuncionarioNovo.SalarioLiquido(
    SalarioBruto,
    PLR,
    Desconto
  );

  console.log(
    `O funcionario de nome ${
      FuncionarioNovo.Nome
    }, tem o salário bruto de ${SalarioBruto.toFixed(2)}, teve ${
      FuncionarioNovo.Totaldefaltasano
    } faltas, e sua PLR é de ${PLR?.toFixed(2)} `
  );

  console.log(
    `O funcionario de nome ${
      FuncionarioNovo.Nome
    }, tem o salário bruto de ${SalarioBruto.toFixed(
      2
    )},teve o desconto de ${Desconto.toFixed(2)}, a PLR é de ${PLR?.toFixed(
      2
    )} e o salário líquido de ${SalarioLiquido.toFixed(2)} `
  );
} catch (error: any) {
  console.log(error.message);
}
