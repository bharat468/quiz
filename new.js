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

let count = 9;
let questionNumber = 0;
let newscore = 0;
print()

//yaha hm question no. 1 ko print kra rahe hai

let time = setInterval(() => {
    //     // eska kam kuch secound ke bad nya question aana hai
    if (count === 1) {
        if (questionNumber >= data.length - 1) {
            scoreplus()
            return
            //       //eska kam ki jb qustion number or data ki length ke brabr ya badi ho jaye to ese roko

        }
        count = 9;
        timer.innerHTML = 9;
        questionNumber++;
        print()
        // esme 1 qustion ko plus kra raha hai
    }

    else {
        count--
        timer.textContent = count
    }

}, 1000)

function print() {
    questionDiv.innerHTML = data[questionNumber].q
    options.forEach((option, index) => {
        option.innerText = data[questionNumber].opt[index]
        option.style.backgroundColor = ""
        option.style.pointerEvents = "auto"
    });
}

options.forEach((e) => {
    e.addEventListener("click", () => {

        options.forEach((e) => {
            e.style.pointerEvents = "none"
        })

        if (e.innerHTML === data[questionNumber].a) {
            e.style.backgroundColor = "green"
            newscore++
            score.innerHTML = newscore
        }
        else {
            e.style.backgroundColor = "red"
            options.forEach((a) => {
                if (a.innerHTML === data[questionNumber].a) {
                    a.style.backgroundColor = "green"
                }
            })
        }
    })
})


button.addEventListener("click", () => {
    if (questionNumber >= data.length - 1) {
        scoreplus()
        return
    }
    else {
        count = 9;
        timer.innerHTML = 9;
        questionNumber++;
        print()
    }
})

function scoreplus() {
    clearInterval(time);
    timer.style.display = "none";
    questionDiv.style.display = "none";
    optionsDiv.style.display = "none";
    score.innerHTML = newscore
}

function random() {
    let rendomqusiton = Math.floor(Math.random * data[questionNumber].length)
    console.log(rendomqusiton);
}

