<template>
    <button :class="estiloDoBotao" :type="tipo" @click="disparaAcao()">{{rotulo}}</button>
</template>

<script>
export default {
    props:{
        //validando propriedades
        tipo:{
            required: true,
            type: String
        },

        rotulo: {
            required: true,
            type: String
        },

        confirmacao: Boolean,
        estilo: String
    },

    methods: {
        disparaAcao(){
            if(this.confirmacao){
                if(confirm('Deseja remover?')){
                    this.$emit('botaoAtivado') //$emit emite um função com nome passado por paramentro 'botaoAtivado'
                }
                return;
            }
            this.$emit('botaoAtivado')
        }
    },

    computed: {
        estiloDoBotao(){
            if(this.estilo == 'padrao' || !this.estilo) return 'botao botao-padrao';
            if(this.estilo == 'perigo') return 'botao botao-perigo';
        }
    }
    
}
</script>

<style scoped>
.botao {
    display: inline-block;
    padding: 10px;
    border-radius: 3px;
    margin: 10px;
    font-size: 1.2em;
}

.botao-perigo {
    background: firebrick;
    color: white;
}

.botao-padrao {
    background: darkcyan;
    color: white;
}

</style>