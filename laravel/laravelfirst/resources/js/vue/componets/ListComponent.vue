<template>
    <div>
        <h1>
            Componente de lista
        </h1>

        <section>
            <o-table :data="posts">
                <o-table-column field="id" label="Id" width="40" numeric sortable >
                    {{ p.row.id }}
                </o-table-column>
                <o-table-column field="title" label="title" width="40" numeric sortable >
                    {{ p.row.title }}
                </o-table-column>
                <o-table-column field="posted" label="posted" width="40" numeric sortable >
                    {{ p.row.posted }}
                </o-table-column>
                <o-table-column field="category_id" label="category_id" width="40" numeric sortable >
                    {{ p.row.category_id }}
                </o-table-column>
            </o-table>
        </section>

    </div>
</template>
<script>
    export default {
        name: "ListComponent",
        data(){
            return{
                posts:[],
                isLoading:true
            }
        },

        mounted(){
            this.$axios.get("/api/posts").then((res) =>{
                this.posts = res.data;
                this.isLoading = false;
            })
        },

        methods:{
            clickMe() {
                alert("Hola, has echo clic en el botón de prueba");
            }
        }

    }
</script>
