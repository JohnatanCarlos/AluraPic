<template>
  <div>

    <h1 class="centralizar" >{{ titulo }}</h1> <!--    {{ }}   <-- isso é interpoção    -->
    <!-- <img v-bind:src="foto.url" v-bind:alt="foto.titulo">  -->
    <!-- v-bind: ou : usar em atributos da tag ao invés de interpolação -->

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtre por parte do titulo">
    
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="x of fotosComFiltro">

        <meu-painel :titulo="x.titulo">
          <imagem-resposivisa :url="x.url" :titulo="x.titulo"/>
          <meu-botao 
            tipo="button" 
            rotulo="DELETAR"  
            @botaoAtivado="remore(x)"
            :confirmacao="true"
            estilo="perigo">
          </meu-botao>
        </meu-painel>

      </li>
    </ul>
    
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva  from '../shared/imagem-responsiva/imagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'meu-painel' : Painel, //dando nome a tag do componente
    'imagem-resposivisa' : ImagemResponsiva,
    'meu-botao' : Botao
  },

  data(){
    return{
      titulo: 'AluraPic',
      fotos: [],
      filtro: ''
    }

  },

  // filtragem
  computed: {
    fotosComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else{
        return this.fotos
      }
    }
  },

  methods:{
    remore(x){

        alert('removendo ' + x.titulo);
    }
  },

  // Lifecycle Hooks
  created(){
   
   let promisse = this.$http.get('http://localhost:3000/v1/fotos'); //acessando ao servidor da api
   promisse
    .then(res => res.json()) //pegando a resposta do servidor e convertendo em json
    .then(photos => this.fotos = photos, err => console.log(err)); //pegando fotos e atribuindo ao array de fotos acima, e segundo paramentro retornando um erro cara de pau no servidor
    
  }

}
</script>

<style>
  .centralizar{
    text-align: center;
  }

  .lista-fotos{
    list-style: none;
  }

  .lista-fotos .lista-fotos-item{
    display: inline-block;
  }

  .filtro{
    display: block;
    width: 100%;
  }

  
</style>
