function quizData() {
    const req = new XMLHttpRequest()

    req.open('get', 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz', true)

    req.onreadystatechange = function () {

        if(this.readyState === 4){
            if(this.status == 200){
                const data = JSON.parse(this.responseText)
                const container = document.getElementById("container");
                const submit = document.createElement("input");
                let scoreSub = document.getElementById("score-sub")
                scoreSub.innerText = 0;
                submit.type = "submit";
                submit.classList = "submit-btn";
                const {question, answer, options} = data[0];
                
                for(x in data){
                    const que = document.createElement("form");
                    const ques = document.createElement("div");
                    ques.classList = "que-txt";
                    ques.innerText = `Q${[+x + 1]}. ${data[x].question}`;
                    que.classList = "questions";
                    que.id = `que${+x + 1}`;
                    que.append(ques);
                    container.append(que);
                    for(z in data[x].options){
                        const subque = document.createElement("div");
                        const opt = document.createElement("input");
                        const optLabel = document.createElement("label");
                        opt.classList = "opts";
                        opt.type = "radio";
                        opt.name = "options";
                        opt.id = `opt${[+x + 1]}${[+z + 1]}`;
                        optLabel.classList = "opt-labels";
                        optLabel.setAttribute("for",`opt${[+x + 1]}${[+z + 1]}`);
                        optLabel.innerText = `${data[x].options[z]}`;
                        subque.classList = "sub-question";

                        subque.appendChild(opt)
                        subque.appendChild(optLabel)
                        que.append(subque)
                    }
                    submit.addEventListener('click', (e)=>{
                        e.preventDefault();
                        const opt13 = document.getElementById("opt13");
                        const opt21 = document.getElementById("opt21");
                        const opt33 = document.getElementById("opt33");
                        const opt43 = document.getElementById("opt43");
                        const opt52 = document.getElementById("opt52");
                        const que1 = document.getElementById("que1");
                        const que2 = document.getElementById("que2");
                        const que3 = document.getElementById("que3");
                        const que4 = document.getElementById("que4");
                        const que5 = document.getElementById("que5");
                        
                        function optFn(elem1, elem2){
                            if(elem1.checked === true){
                                return +elem1.checked;
                            }else {
                                elem2.classList = "wrong";
                                return +elem1.checked;
                            }
                        }
                        let scoreValue = optFn(opt13, que1) + optFn(opt21, que2) + optFn(opt33, que3) + optFn(opt43, que4) + optFn(opt52, que5);
                        scoreSub.innerText = `${scoreValue}`;
                    })
                }

                // optFn(opt13)
                // optFn(opt21)
                // optFn(opt33)
                // optFn(opt43)
                // optFn(opt52)
                // console.log(optFn(opt13) + optFn(opt21) + optFn(opt33) + optFn(opt43) + optFn(opt52))

                container.append(submit)
            } else {
                console.log('Error', this.status);
            }
        }
    }
    req.send()
}

quizData()