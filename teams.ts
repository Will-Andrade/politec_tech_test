type Student = {
  name: string;
  H: number;
};

type Team = string[];

const createTeams = (N: number, T: number, obj: Student[]) => {
  let availableStudents: Student[] = obj
    .map(student => student)
    .sort((studentA, studentB) => studentA.H - studentB.H);
  
  let counter = 0;
  let pivot = 0;
  let createdTeams: Team[] = [];
  
  for (let i = 1; i <= T; i++) {
    createdTeams.push([]);
  }

  while (counter < N) {
    createdTeams[pivot].push(availableStudents[availableStudents.length - 1].name);

    availableStudents.pop();

    if (pivot < T - 1) {
      pivot++;
    } else {
      pivot = 0;
    }

    counter++;
  }

  createdTeams.forEach(team => {
    team.sort();
  });

  for (let i = 0; i < T; i++) {
    console.log(`Time ${i + 1}`);
    
    for (let j = 0; j < createdTeams[i].length; j++) {
      console.log(`${createdTeams[i][j]}`);
    }

    console.log('\n');
  }
};

export default createTeams;
