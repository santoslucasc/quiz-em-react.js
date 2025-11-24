import { useState } from 'react'
import macaco from '../assets/macaco.jpg'
import leao from '../assets/leao.jpg'
import capivara from '../assets/capivara.jpg'

const SistemaDePontos = () => {
    const [um, setUm] = useState('')
    const [dois, setDois] = useState('')
    const [tres, setTres] = useState('')
    const [nota, setNota] = useState(0)

    // Captura o que foi digitado
    const handleChangeUm = (event) => setUm(event.target.value)
    const handleChangeDois = (event) => setDois(event.target.value)
    const handleChangeTres = (event) => setTres(event.target.value)

    const handleSubmit = () => {
        // contagem de acertos 
        let contador = 0
        if (um.trim().toLowerCase() === 'macaco') contador++
        if (dois.trim().toLowerCase() === 'leao') contador++
        if (tres.trim().toLowerCase() === 'capivara') contador++
        setNota(contador)
        console.log(contador)
        //exibindo resultado
        if (contador === 1) alert('Parabéns, não se reproduza, você acertou somente 1.')
        if (contador === 2) alert('Parabéns, temos quase um gênio aqui, você acertou 2.')
        if (contador === 3) alert ('Parabéns, deve ter estudado muito, você acertou 3.')
            //Limpando os campos após responder
            setUm('')
            setDois('')
            setTres('')
    }

    

    return (
        <div>
                   {/* Imagem do Macaco */}
                   <img className="imagem" src={macaco} alt=""/>
                   <br />
                   <p>Digite o nome do animal:</p>
                   <br />
                   <input type="text" value={um} onChange={handleChangeUm}/>
                   
                   <br />
           
                   {/* Imagem do Leão */}
                   <img className="imagem" src={leao} alt="" />
                   <br />
                   <p>Digite o nome do animal:</p>
                   <br />
                   <input type="" value={dois} onChange={handleChangeDois}/>
                   
                   <br />
                   
           
                   {/* Imagem da Capivara */}
                   <img className="imagem" src={capivara} alt="" />
                   <br />
                   <p>Digite o nome do animal:</p>
                   <br />
                   <input type="" value={tres} onChange={handleChangeTres}/>
                   <br />
                   <br />
                   <button onClick={handleSubmit}>Se tiver certo aperte o botão</button>

                   

        </div>
    )
}

export default SistemaDePontos;
