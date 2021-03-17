app.component('pagination',{
    props: {
        start: {
            type: Number,
            required: true,
            // default: 0
        }
    },
    data() {
        return {
            page: 0
        }
    },
    template: 
        /*html*/
        `
        <button type="button" class="but" @click="pre" v-if="start > 0">Pervious</button>
        <button type="button" class="but" @click="next">Next</button>
        `,
    methods: {
        next() {
            this.$emit('next-page')
        },
        pre() {
            this.$emit('pre-page')
        }
    },
    computed: {
        firstPage() {
            console.log(this.page)
            if (this.page == 0) {
                return true
            }
            return false
        }
    }
})