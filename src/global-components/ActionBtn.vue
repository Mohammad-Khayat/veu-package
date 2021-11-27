<template >
    <div class="action-btn">
        <b-button variant="primary" v-bind="$attrs">
         <fa :icon="getIconName"/>
        </b-button>
    </div>
</template>
<script>
export default {
    props:{
        type:String,
        customIcon:{
            type:String,
            default:'fas fa-plus'
        }

    },
    computed:{
        getIconName(){
            switch(this.type){
                case  'add' : return 'fas fa-plus'

                case 'edit' : return 'fas fa-pen'

                case 'delete': return 'fas fa-trash'

                case 'details' : return 'fas fa-ellipsis-vertical'

                case 'close' : return 'fas fa-times'

                default : return this.customIcon
            }
        }
    }
}
</script>

<style lang="scss">
    .action-btn{
        .btn{
        padding: 0;
        height: 35px;
        width: 35px;
        aspect-ratio: 1;
        }
    }   
</style>