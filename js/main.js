const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            totalItems: null,
            result: null,
            books: [],
            startIndex: 0,
            oldKeyword: ''
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?&q=' + this.keyword + "&startIndex=" + this.startIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => {
                    this.result = json
                    console.log(this.result)
                    if(this.keyword != this.oldKeyword){
                        this.oldKeyword = this.keyword
                        this.startIndex = 0
                    }
                }
                )
        },
        nextPage() {
            this.result = null
            this.startIndex += 20
            this.searchGoogleBooks()
        },
        prePage() {
            if (this.startIndex > 19) {
                this.result = null
                this.startIndex -= 20
                this.searchGoogleBooks()
            }
        }
    }
})