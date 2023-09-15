const counter = document.querySelector("#counter")

let num = counter.innerHTML


function incrementCount() {
    num++
    counter.innerHTML = num;
}
let startCount = setInterval(incrementCount, 1000)



const plusSign = document.querySelector("#plus");
plusSign.addEventListener('click', function() {
    counter.innerHTML = num++
})

const minusSign = document.querySelector("#minus");
minusSign.addEventListener('click', function() {
    counter.innerHTML = num--
})


const heartButton = document.querySelector("#heart");
heartButton.addEventListener('click', function() {
    const likeList = document.querySelector("ul")
    const like = document.createElement("li")
    like.innerHTML = `${num} has been liked 1 time`
    likeList.append(like)
})


function pause() {
    clearInterval(startCount)
    pauseButton.innerHTML = ' resume ';
    pauseButton.id = 'resume'
    plusSign.disabled = true;
    minusSign.disabled = true;
    heartButton.disabled = true;
}

function resume() {
    pauseButton.innerHTML = 'pause';
    setInterval(incrementCount, 1000)
    pauseButton.id = 'pause'
    plusSign.disabled = false;
    minusSign.disabled = false;
    heartButton.disabled = false;
}

let pauseButton = document.querySelector("#pause");

    pauseButton.addEventListener('click', function() {
        if (pauseButton.id === 'pause') {
            pause()
        } else if (pauseButton.id === 'resume') { 
            resume()
    }
})


const commentForm = document.querySelector('#comment-form');
commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let comment = e.target["comment-input"].value
    let commentList = document.querySelector("#list")
    let comments = document.createElement('p')
    comments.innerHTML = comment;
    commentList.appendChild(comments)
    this.reset();
})


