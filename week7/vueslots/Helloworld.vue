 
  <template>
  <div>
    <div class="title">
      <h1>
        <slot name="title"> Default Title </slot>
      </h1>
    </div>
    <div class="content">
      <p>
        <slot name="content"> Default Content </slot>
      </p>
    </div>
    <div class="comments">
      <slot name="feedback"> Default feedback </slot>
    </div>
  </div>
</template>
    
    <script>
    
    export default {
      name: "HelloWorld",
      data() {
        return {
        welcomeMsg: ""
        }
      },
      props: {
        msg: String
      },
      methods: {
        changeMsg() {
          this.$emit("changeMsg", this.welcomeMsg);
          console.log('message emit from child component')
        }
      }
    };
    </script>
   
    <style scoped>
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }
    </style>