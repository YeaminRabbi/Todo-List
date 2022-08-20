<template>
    <div class="addItem">
        <input type="text" v-model="item.name"/>
        <button class="button1" @click="addItem()" >Add</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data: function ()
    {
       return {
            item: {
                name : ""
            }
       } 
    },

    methods:{
        addItem()
        {
            if(this.item.name == ''){
                return;
            }

            axios.post('api/item/store', {
                item: this.item
            })
            .then(response=>{
                    if(response.status ==201){
                        this.item.name == "";
                        this.$emit('reloadlist');
                    }
                
            })
            .catch( error=>{
                console.log(error);
            })
        }
    }


}
</script>

<style scoped>




.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-top: 10px;
}
.button1 {
    background-color: white;
    color: black;
    border: 2px solid #4CAF50;
    margin-top:15px;
    margin-left: 10px;
}


</style>