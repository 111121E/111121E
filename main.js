// const  array = [
//     {
//         username: 'Fred',
//         full_name: "Fred Montano"
//     },
//     {
//         username: 'Fred',
//         full_name: "Fred Montano"
//     },
//     {
//         username: 'Fred',
//         full_name: "Fred Montano"
//     },
//     {
//         username: 'Fred',
//         full_name: "Fred Montano"
//     },
//     {
//         username: 'Fred',
//         full_name: "Fred Montano"
//     },
// ]
// let i = 0; // i = i + 1
// // console.log(i)

//  ************* for ***********
// for (let i = 1; i < array.length; i++){
//     console.log(array[i])
// } // индексы

// ***** for (of)  ***********
// for (let user of array) {
//     console.log(user)
// }

// const obj = {
//     key1: 'b1',
//     key2: 'b2',
//     key3: 'b3',
//     key4: 'b4',
//     key5: 'b5',
//     key6: 'b6',
//     key7: 'b7',
//     key8: 'b8',
//     key9: 'b9',
//     key10: 'b10',
// }
// for (let key in obj){
//     console.log(obj)
// }


// let i = 0;
// while (i < 5) {
//     console.log("hello!")
// }

// const  users = [
//     {
//         username: "Jack",
//         salary: 500,
//     },
//     {
//         username: "John",
//         salary: 5000,
//     },
//     {
//         username: "Esen",
//         salary: 10000,
//     }
// ]
//
// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers);

// for (let user of users) {
//     if (user.salary > filteredUsers) {
//         console.log(user)
//     }
// }


const robots = [
    {
        robotname: "Stan",
        Defense: 800,
        power: 800,
        speed: 800,
    },
    {
        robotname: "Drew",
        Defense: 600,
        power: 600,
        speed: 600,
    },
    {
        robotname: "Anton",
        Defense: 700,
        power: 700,
        speed: 700,
    },
    {
        robotname: "Fred",
        Defense: 500,
        power: 500,
        speed: 500,
    },
    {
        robotname: "Kay",
        Defense: 1000,
        power: 1000,
        speed: 1000,
    }
]

const Robotics = robots.filter(robot => robot.Defense > 700)
console.log(Robotics);