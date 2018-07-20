
const input = [
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1879-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1867-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1885-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1858-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1887-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1884-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1901-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', //
      dob: '1892-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1879-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1871-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1866-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1868-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ];
  
  let noOfGroups = 0;
  let output ={}
  
  input.map((student)=>{
    const {name, dob, regNo} = student
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
  
    // if no of groups is zero
    if(!noOfGroups){
    createNewGroup({name, age, regNo})
    return
    }

    let  inserted = false

    for(let groupNumber = 1; groupNumber <= noOfGroups; groupNumber++){

        let group = `group${groupNumber}`
        let members = output[group].members
        let oldest =  output[group].oldest
        let sum = output[group].sum

        if(members.length < 3){
            let eligible = false
            members.map((member)=>{
                if(age <= member.age+5 && age >= member.age-5 )
                    eligible = true;
                
            })

            if(eligible){
                output = {
                    ...output,
                    [group]: {
                        members: [
                            ...output[group].members,
                            {name, age}
                        ],
                        oldest:(age > oldest?age:oldest ),
                        sum: sum+age,
                        regNo:[...output[group].regNo, ...regNo]

                    }
                }
                inserted= true
            }              
        }
    }

        
    if(!inserted)
        createNewGroup({name, age, regNo})
        
})

function createNewGroup(firstMember){
  const {name, age, regNo} = firstMember
    noOfGroups = noOfGroups+1
    let group = `group${noOfGroups}`
    output = {
        ...output,
        [group]: {
            members: [
                {name, age}
            ],
            oldest: age,
            sum: age,
            regNo:[regNo],
        }
    }
}

console.log(JSON.stringify(output))