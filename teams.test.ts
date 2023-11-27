import createTeams from "./teams";

describe('Create teams Exercise', () => {
  
  it('should assign 3 teams', () => {
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

    const input = [
      { name: 'felipe',  H: 4 },
      { name: 'alvaro', H: 8 },
      { name: `thiago`, H: 1 },
      { name: 'rodrigo', H: 3 },
      { name: 'robson', H: 2 },
      { name: 'fabio', H: 9 },
      { name: 'ricardo', H: 11 },
      { name: 'rodolfo', H: 0 },
      { name: 'andre', H: 14 },
      { name: 'arthur', H: 12 },
      { name: 'ronaldo', H: 55 },
      { name: 'rogerio', H: 30 },
      { name: 'lucas', H: 7 },
      { name: 'rafael', H: 17 }
    ];

    createTeams(14, 3, input);

    // Team #1
    expect(mockConsoleLog).toHaveBeenCalledWith('Time 1');
    expect(mockConsoleLog).toHaveBeenCalledWith('andre');
    expect(mockConsoleLog).toHaveBeenCalledWith('fabio');
    expect(mockConsoleLog).toHaveBeenCalledWith('felipe');
    expect(mockConsoleLog).toHaveBeenCalledWith('ronaldo');
    expect(mockConsoleLog).toHaveBeenCalledWith('thiago');

    // Team #2
    expect(mockConsoleLog).toHaveBeenCalledWith('Time 2');
    expect(mockConsoleLog).toHaveBeenCalledWith('alvaro');
    expect(mockConsoleLog).toHaveBeenCalledWith('arthur');
    expect(mockConsoleLog).toHaveBeenCalledWith('rodolfo');
    expect(mockConsoleLog).toHaveBeenCalledWith('rodrigo');
    expect(mockConsoleLog).toHaveBeenCalledWith('rogerio');

    // Team #3
    expect(mockConsoleLog).toHaveBeenCalledWith('Time 3');
    expect(mockConsoleLog).toHaveBeenCalledWith('lucas');
    expect(mockConsoleLog).toHaveBeenCalledWith('rafael');
    expect(mockConsoleLog).toHaveBeenCalledWith('ricardo');
    expect(mockConsoleLog).toHaveBeenCalledWith('robson');

    mockConsoleLog.mockRestore();
  });

  it('should assign 2 teams', () => {
    const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    const input = [
      { name: 'john', H: 3 },
      { name: 'richard', H: 0 },
      { name: 'greg', H: 100 },
      { name: 'rupert', H: 20 }
    ];

    createTeams(4, 2, input);

    // Team #1
    expect(mockConsoleLog).toHaveBeenCalledWith('Time 1');
    expect(mockConsoleLog).toHaveBeenCalledWith('greg');
    expect(mockConsoleLog).toHaveBeenCalledWith('john');

    // Team #2
    expect(mockConsoleLog).toHaveBeenCalledWith('Time 2');
    expect(mockConsoleLog).toHaveBeenCalledWith('rupert');
    expect(mockConsoleLog).toHaveBeenCalledWith('richard');
  })
});