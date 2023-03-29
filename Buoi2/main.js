const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const output=words.slice(3);
console.log(output);
// Expected output: Array ["exuberant", "destruction", "present"]

const filtered = [12, 5, 8, 130, 44];
const filteredout= filtered.filter(item=>{
    return item===12 || item===130 ||item===44
})
console.log(filteredout);
// filtered is [12, 130, 44]

const array1 = [5, 12, 8, 130, 44];
console.log(array1[1]);
// Expected output: 12

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
console.log(inventory[inventory.length-1]);
// { name: 'cherries', quantity: 5 }

const array2 = [1, 4, 9, 16];
const array2out = array2.map(item=>item*2);
console.log(array2out);
// Expected output: Array [2, 8, 18, 32]

const numbers = [1, 4, 9];
const numbersout= numbers.map(item=>Math.sqrt(item));
console.log(numbersout);
// roots is now     [1, 2, 3]

const array3 = [1, 2, 3, 4];
const array3out= array3.reduce((a,b)=>a+b,0);
console.log(array3out);

// 0 + 1 + 2 + 3 + 4
// Expected output: 10


const array4 = ['a', 'b', 'c'];
array4.forEach((item)=>{
    console.log(item);
});
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

const ratings = [5, 4, 5];
const ratingsout = ratings.reduce((a,b)=>a+b)
console.log(ratingsout);
// expected output: 14


const arraySparse = [1, 3, /* empty */, 7];
arraySparse.forEach((item)=>{
        console.log({element: item})
});
console.log({numCallbackRuns: arraySparse[1]})
// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }

const array5 = [1, 30, 39, 29, 10, 13];
const array5out = array5.every(item=>item>0);
console.log(array5out);
// Expected output: true


// Làm phẳng mảng mảng
let depthArray = [1, 2, [3,4], 5, 6, [ 7, 8, 9]];
let i=0;
while (i<depthArray.length)
{
    if (Array.isArray(depthArray[i])===true )
    {
        let x=i;
        const arraytemp=depthArray[i];
        depthArray.splice(x,1);
        arraytemp.forEach((item)=>{
            depthArray.splice(x,0,item);
            x++;
        })           
    }
    else i++;
}
console.log(depthArray);
// [1,2,3,4,5,6,7,8,9]


// lấy các khóa học và đưa vào 1 mảng mới
const Topics = [
    {
        topic: 'Front-end',
        coures: [
            {
                id: 1,
                title: 'HTML, CSS'
            },
            {
                id: 2,
                title: 'ReactJS'
            },
            {
                id: 3,
                title: 'Javacript'
            }
        ]  
    },
    {
        topic: 'Back-end',
        coures: [
            {
                id: 1,
                title: 'PHP'
            },
            {
                id: 2,
                title: 'NodeJs'
            }
        ]
    }
]
let Topicsout=[];
Topics.forEach((topic)=>{
    topic.coures.forEach((item)=>
        Topicsout.push(item))
});
console.log(Topicsout);

/**
 *  [{
    id: 1,
    title: 'HTML, CSS'
    },
{
    id: 2,
    title: 'ReactJS'
},
{
    id: 3,
    title: 'Javacript'
},
{
    id: 1,
    title: 'PHP'
},
{
    id: 2,
    title: 'NodeJs'
}]
 */