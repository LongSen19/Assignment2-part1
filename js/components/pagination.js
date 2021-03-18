app.component('pagination',{
    props: {
        start: {
            type: Number,
            required: true,
            // default: 0
        }
    },
   template: 
        /*html*/
        `
        <div class="box">
        <div class="center">
        <button type="button" class="pagination-button" @click="pre" v-if="start > 0">Pervious</button>
        <button type="button" class="pagination-button" @click="next">Next</button>
        </div>
        </div>
        `,
    methods: {
        next() {
            this.$emit('next-page')
        },
        pre() {
            this.$emit('pre-page')
        }
    },
})