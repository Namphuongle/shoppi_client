<template>
  <div>
    <div class="page " >
      <nav aria-label="Page navigation example " class="pagition">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#" @click="previousPage()">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#" @click="loadPage(1)">1</a></li>
          <li class="page-item"><a class="page-link" href="#" @click="loadPage(2)">2</a></li>
          <li class="page-item"><a class="page-link" href="#" @click="loadPage(3)">3</a></li>
          <li class="page-item"><a class="page-link" href="#" @click="nextPage()">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      accounts: [],
      errors: [],
      currentPage: 1,
      totalPage: 1,
      getNumberPage: 1,
      username: '',
      password: '',


    }
  },

  methods: {
    upCase(text) {
      return text.toUpperCase()
    },

    async loadPage(page) {
      this.accounts.pop()

      this.currentPage = page

      try {
        const getAccount = await axios({
          method: 'get',
          url: 'http://localhost:3005/api/user?pagea=' + this.currentPage
        })
        // console.log((await getAccount).data.getAccount);
        const account = getAccount.data
        this.accounts.push(account)
        this.getNumberPage = account.getCount
        console.log('ac', account);
        // this.accounts = (await getAccount).data
        // console.log(this.accounts);
        // this.accounts = (await getAccount).data



      } catch (error) {
        console.log('loi server', error);
      }

    },

    async nextPage() {
      this.accounts.pop()

      this.currentPage++

      try {
        const getAccount = await axios({
          method: 'get',
          url: 'http://localhost:3005/api/user?page=' + this.currentPage
        })


        // this.accounts = (await getAccount).data
        const account = getAccount.data
        this.accounts.push(account)

      } catch (error) {
        console.log('loi server', error);
      }

    },


    async previousPage() {
      this.accounts.pop()

      this.currentPage--

      try {
        const getAccount = await axios({
          method: 'get',
          url: 'http://localhost:3005/api/user?page=' + this.currentPage
        })


        const account = getAccount.data
        this.accounts.push(account)

      } catch (error) {
        console.log('loi server', error);
      }

    }
  },
  watch: {
    async loadPage1() {

      try {
        const getAccount = await axios({
          method: 'get',
          url: 'http://localhost:3005/api/user/'
        })
        // console.log((await getAccount).data.getAccount);
        const account = getAccount.data
        console.log(account);
      } catch (error) {
        console.log('loi server', error);
      }

    },
  }

  // lấy dữ liệu khi component được tạo thành công
  // created() {
  //   axios.get('http://localhost:3005/api/user?page=1')
  //   .then(response => {
  //     this.accounts = response.data

  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })
  // },

  // async created() {

  //   try {
  //     const getAccount = axios({
  //       method: 'get',
  //       url: 'http://localhost:3005/api/user?page=2' 
  //     })


  //     this.accounts = (await getAccount).data
  //     console.log(currentPage);
  //   } catch (error) {
  //     console.log('loi server', error);
  //   }


  // },



}

</script>
  
  <!-- <script >
  import axios from 'axios';
  
  export default {
    data() {
      return {
        accounts: []
          
      }
    }, -->
  
  // computed: {
  //   const getAccount = async(req, res, next) => {
  //   try {
  //     const account =await axios.get('http://localhost:3005/api/user?page=1')
      
  //     this.accounts.push(account.data) 
  //     console.log('alo123a',account.data);
  //   } catch (error) {
      
  //     console.log('loi server',error);
  //   }
  // },
  
  // getAccount()
  // }
  
  
  <!-- } -->
  
  
<style lang="scss"  scoped>
.page {
  border: 1px solid red;
  display: flex;
  justify-content: center;
  margin-top: .5rem;
  // cam click
  pointer-events: none;
}
</style>