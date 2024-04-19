const botaoReceber01 = document.querySelector("#botaoatualizar01")
const caixaParcial01 = document.querySelector("#pontuacaoParcial01")
const caixaComando01 = document.querySelector("#caixaComando01")

const BuscarDados = () =>{
    const endPoint01 = "http://localhost:3000/gleitonjog01"
    fetch(endPoint01)
    .then(res => res.json())
    .then(receber=>{
        const receberD = Object.values(receber)
         console.log(receberD)
        const receberDados = receberD.filter((upu)=>{
            if(caixaComando01.innerHTML === upu.timeEscolhido01 && caixaComando01.innerHTML === upu.pontuacaoparcial01){
                caixaComando01.innerHTML == ""
            }
            const Div = document.createElement("div")
            Div.setAttribute("id","ti")
            Div.setAttribute("class","time t")
            Div.innerHTML = upu.timeEscolhido01
            caixaParcial01.innerHTML = upu.pontuacaoparcial01
            caixaComando01.appendChild(Div)
            console.log(caixaComando01.textContent)
            

        })
    })
  }
     botaoReceber01.addEventListener("click",(evt)=>{

     BuscarDados()
  })

//   ------------------------ time2 ---------------------------

const botaoReceber02 = document.querySelector("#botaoatualizar02")
const caixaParcial02 = document.querySelector("#pontuacaoParcial02")
const caixaComando02 = document.querySelector("#caixaComando02")

const buscarDad = () =>{
    const endPoint002 = "http://localhost:3000/gleitonjogador02"
    fetch(endPoint002)
    .then(res => res.json())
    .then(resposta=>{
        const respostaDB = Object.values(resposta)
        const respostabancoD = respostaDB.filter((umpum)=>{
            const Divti = document.createElement("div")
            Divti.setAttribute("id","ti")
            Divti.setAttribute("class","time t")
            caixaParcial02.innerHTML = umpum.pontuacaoparcial02
            Divti.innerHTML = umpum.timeEscolhido02
            caixaComando02.appendChild(Divti)
            
        })
        console.log(respostaDB)
    })
}
botaoReceber02.addEventListener("click",(env)=>{
    buscarDad()
})
// -------------------time3----------------------------------
const botaoReceber03 = document.querySelector("#botaoatualizar03")
const caixaParcial03 = document.querySelector("#pontuacaoParcial03")
const caixaComando03 = document.querySelector("#caixaComando03")

const buscarjogBD = () =>{
    const endPoint003 = "http://localhost:3000/gleitonjogador03"
    fetch(endPoint003)
    .then(res => res.json())
    .then(receberdados =>{
        const receberDad = Object.values(receberdados)
        const receberBaDa = receberDad.filter((up)=>{
            console.log(up)
            const Divtime = document.createElement("div")
            Divtime.setAttribute("id","ti")
            Divtime.setAttribute("class","time t")
            caixaParcial03.innerHTML = up.pontuacaoparcial03
            Divtime.innerHTML = up.timeEscolhido03
            caixaComando03.appendChild(Divtime)


        })
    })
}
botaoReceber03.addEventListener("click",(evt)=>{
    buscarjogBD()
})

// ------------------pontuacão total --------------------------------
