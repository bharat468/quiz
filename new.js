let data = [
    {
        q: "Who is known as Hitman",
        a: " Rohit Sharma",
        opt: ["Virat Kohli", " Rohit Sharma", "MS Dhoni", "KL Rahul"]
    },

    {
        q: "Who is known as a 'Chinaman",
        a: " Kuldeep Yadhav",
        opt: ["Mohamad Shami", "jasprit Bumrah", " Kuldeep Yadhav", "Ravindar Jadeja"]
    },

    {
        q: "Who is known as the Yorker King?",
        a: "Lasith Malinga",
        opt: ["Lasith Malinga", "jasprit Bumrah", "Michal Starc", "Jofra Archer"]
    },

    {
        q: "Who is known as the 'Run Machine'?",
        a: "Virat Kohli",
        opt: ["Sachin Tendulkar", "Brand Mekulam", "ab de villiers", "Virat Kohli"]
    },

    {
        q: "In cricket, who is known as 'Bapu'?",
        a: "Rahul Dravid",
        opt: ["Axar patel", "Rahul Dravid", "Yuvraj Singh", "Sorbh Ganguli"]
    },

]


let timer = document.querySelector(".timer")
let questionDiv = document.querySelector(".question")
let optionsDiv = document.querySelector(".options")
let options = document.querySelectorAll(".option")
let score = document.querySelector(".score")
let button = document.querySelector(".button")

let questions = []


let count = 9;
let questionNumber = 0;
let newscore = 0;
random()
print()
//yaha hm question no. 1 ko print kra rahe hai

let time = setInterval(() => {
    //     // eska kam kuch secound ke bad nya question aana hai
    if (count === 1) {
        if (questionNumber >= data.length - 1) {
            scoreplus()
            return
            //       //eska kam ki jb qustion number or questions ki length ke brabr ya badi ho jaye to ese roko

        }
        count = 9;
        timer.innerHTML = 9;
        questionNumber++;
        random()
        print()
        // esme 1 qustion ko plus kra raha hai
    }

    else {
        count--
        timer.textContent = count
    }

}, 1000)

function print() {
    questionDiv.innerHTML = questions[questionNumber].q
    options.forEach((option, index) => {
        option.innerText = questions[questionNumber].opt[index]
        option.style.backgroundColor = ""
        option.style.pointerEvents = "auto"
    });
    // ye wala function question or option ko print krta hai
}

options.forEach((e) => {
    e.addEventListener("click", () => {

        options.forEach((e) => {
            e.style.pointerEvents = "none"
            // ye wala foreach ka kam css ke hisab se coursor pointer wala kam kr raha hai
        })

        if (e.innerHTML === questions[questionNumber].a) {
            e.style.backgroundColor = "green"
            newscore++
            score.innerHTML = newscore
            // aagar ham javab sahi dete hai to score plus hoga or jo option green hoga
        }
        else {
            e.style.backgroundColor = "red"

            options.forEach((a) => {
                if (a.innerHTML === questions[questionNumber].a) {
                    a.style.backgroundColor = "green"
                }
            })
            // ye wala foreach ye btata hai ki aagar ham galat per click kr dete hai to vo hme right question btaye ga
        }
    })
})


button.addEventListener("click", () => {
    if (questionNumber >= data.length - 1) {
        scoreplus()
        return
        // esme aagar question number  questions ki length se jada ye brabr hota hai to score wala function vahi return hoga
    }
    else {
        count = 9;
        timer.innerHTML = 9;
        questionNumber++;
        random()
        print()
        // ye wala btata hai ki aagar ham next wale button per click krete hai to agla question aajaya ga new value ke sath
    }
})

function scoreplus() {
    clearInterval(time);
    timer.style.display = "none";
    questionDiv.style.display = "none";
    optionsDiv.style.display = "none";
    score.innerHTML = newscore
    // esme ham setinterwale ko clear kra rahe hai or sabhi div ko band kr rahe hai
}


function random() {
    let randomQuestion = Math.floor(Math.random() * data.length)

    if (questions.includes(data[randomQuestion])) {
        return random()
    }
    else {
        questions.push(data[randomQuestion])
    }

}

console.log(questions);




