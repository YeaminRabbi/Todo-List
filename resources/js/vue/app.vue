<template>
    <div class="center">
        <div class="todoListContainer">
            <div class="heading">
                <h2 id="title">Todo List</h2>
                <add-item-form 
                    v-on:reloadlist="getList()"
                />
            </div>
            <list-view :items="items" 
                v-on:reloadlist="getList()"
            />
        </div>
    </div>
</template>   

<script>
import addItemForm from './addItemForm'
import listView from './listView'
export default {
    components: {
        addItemForm,
        listView
    },
    data: function(){
        return {
            items: []
        }
    },
    methods: {
        getList () {
            axios.get('api/items')
            .then(response =>{
                this.item = response.data
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getList(); 
    }
}
</script>

<style scoped>




.todoListContainer {
    width: 350px;
    margin: 10px;
   
}
.center {
    display: flex;
        align-items: center;
        justify-content: center;
}
.heading {
    background: #e6e6e6;
    padding: 10px;
}

#title {
    text-align: center;
}
</style>