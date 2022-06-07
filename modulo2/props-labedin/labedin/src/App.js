import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './imagens/Gabriel.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Gabriel Martins D'Oliveira" 
          descricao="Oi, eu sou o Gabriel Martins. Sou um aluno da Labenu. Estou fazendo uma migração de carreira para área de desenvolvimento Web Fullstack. Também adoro inovações tecnológicas!!!"
        />
        
        <ImagemButton 
          imagem="https://i.pinimg.com/originals/09/0a/ea/090aea0be7fa8331086ce7023350ef0a.png" 
          texto="Ver mais"
        />

        <CardPequeno
        imagemEmail="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
        imagemEndereco = "https://i.pinimg.com/474x/21/be/ee/21beee4b4099dc5e9416a3fda05f34c5.jpg"
        email = "gabriel.ficticio@gmail.com"
        endereco = "Avenida nome pessoa publica"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png" 
          nome="Labenu" 
          descricao="Atualmente estudando Front-end e entusiasmado para a parte de Back-end!" 
        />
        
        <CardGrande 
          imagem="https://www.levelgroup.com.br/blog/wp-content/uploads/2013/11/level-300.jpg" 
          nome="Level Group" 
          descricao="Trabalhei por 3 anos como analista de materiais" 
        />
        <CardGrande 
          imagem="https://senac2021.inf.br/wp-content/uploads/2020/07/maxresdefault.jpg" 
          nome="Senac" 
          descricao="Fiz o curso de idiomas no Senac por 3 anos, concluindo no nível avançado" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
