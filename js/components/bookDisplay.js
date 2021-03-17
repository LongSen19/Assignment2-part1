app.component('book-display', {
    props: {
        book: {
            type: String,
            require: true,
            default: null
        } 
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink">
        <img :src="this.getImage()" class="image-size">
        <p>{{this.bookObj.volumeInfo.title}}
        </p></a>
        <li class="list-group-item"> Author(s): {{this.authors}}</li>
        <li class="list-group-item">Publisher: {{this.publisher}}</li>
        <li class="list-group-item">Published Date: {{this.bookObj.volumeInfo.publishedDate}}</li>
      </ul>`,
    methods: {
        getImage() {
            if(this.bookObj != null) {
                if (this.bookObj.volumeInfo.imageLinks['thumbnail'] != null) {
                    return this.bookObj.volumeInfo.imageLinks['thumbnail']
                }
            }
        }
    },
    computed: {
        bookObj() {
            if(this.book != null){
                let abook = JSON.parse(this.book);
                return abook
            }
                // return JSON.parse(this.book);
            else
                return null;
        },
        authors() {
            if (this.book != null){
                authorList = ''
                if(this.bookObj.volumeInfo.authors != null) {
                for (let index = 0; index < this.bookObj.volumeInfo.authors.length; index++) {
                    authorList += this.bookObj.volumeInfo.authors[index]
                    if (index < this.bookObj.volumeInfo.authors.length - 1) {
                        authorList += ', '
                    }
                }
            }
            if (authorList == '')
            {
                authorList += "Not Found"
            }
            return authorList
            }
        },
        publisher() {
            if(this.bookObj != null) {
                // console.log(this.bookObj.volumeInfo.imageLinks['thumbnail'])
                if(this.bookObj.volumeInfo.publisher != null) 
                    return this.bookObj.volumeInfo.publisher
                return "Not Found"
            }
        },
    }
})