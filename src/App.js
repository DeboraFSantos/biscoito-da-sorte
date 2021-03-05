import React, {Component} from 'react';
import './estilo.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = ['A vida trará coisas boas se tiveres paciência.', 'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.', 
        'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 
        'A maior de todas as torres começa no solo.', 'Não há que ser forte. Há que ser flexível.', 
        'Gente todo dia arruma os cabelos, por que não o coração?', 'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 
        'A juventude não é uma época da vida, é um estado de espírito.', 'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.', 
        'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.', 'Siga os bons e aprenda com eles.']

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numeroAleatorio];
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/biscoito.png')} className="img"/>
                <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                <h2 class="textoFrase">{this.state.textoFrase}</h2>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}

export default App;