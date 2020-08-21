import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'rgb(224,224,224)',
      font:'black',
      users: [],
      posts:[],
      toggleUsers:true,
      togglePosts:false
      
      
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 20);
        data.forEach(user => {
          user.isGoldClient = false;
        });
        this.setState({users: data});
      })


      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data= data.filter(post => post.id < 4)
        
        
        this.setState({posts:data});
        
      })



  }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event){
    this.setState({color:event.target.value});
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  handleTogglePosts(){
    this.state.togglePosts?
        this.setState({togglePosts:false}):
        this.setState({togglePosts:true}) ;    

  }

  handleToggleUsers(){
    this.state.toggleUsers?
        this.setState({toggleUsers:false}):
        this.setState({toggleUsers:true}) ;
  }

  checkEmail(email){
    if(email.includes('@')&& email.includes('.'))
    return true;
  }

  submitAddForm(event, name,salary, email, isGoldClient) {
    
    event.preventDefault();
    if(this.checkEmail(email)) {
      if(name!==''){
      
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            salary,
            isGoldClient
          }
        ]
      }
    });
  }else alert('Numele este obligatoriu');
}else alert('Email-ul nu este valid');

  }

  deleteUser = (id) => {
    const newUsers = this.state.users.filter(user => user.id !== id)
    this.setState({ users: newUsers} )


  }

  render() {
    return(
      <div className="app" style={{background: this.state.background,color:this.state.color}}>
       
       <div className="header">
        <h1 className="d-flex justify-content-center">Admin panel</h1>
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
          <button className="mx-2 my-1 btn btn-primary" onClick={ () => this.handleTogglePosts()} >Afiseaze/Ascunde postarile</button>
          <button className="mx-2 my-1 btn btn-primary" onClick={ () => this.handleToggleUsers()} >Afiseaze/Ascunde userii</button>
         
          <input className="felx-row-reverse" type="color" onChange={(event) => this.changeColor(event)}/>
          <input type="color" onChange={(event) => this.changeTextColor(event)}/>
          
        </nav>

        <div class="container-fluid" >
          <div className="row">
            <div className="col-md-3">
          <UserAddForm submitAddForm={(event, name,salary, email, isGoldClient) => this.submitAddForm(event, name,salary, email, isGoldClient)}/>
            </div>

            <div className="col-md-9">
            { this.state.toggleUsers?
            
              <UserList users={this.state.users} deleteUser={(id) => this.deleteUser(id)}/> :
              null
              
            }
            
            
          
            {   this.state.togglePosts?
              <PostList posts={this.state.posts}/> : 
              null
            }
          
            </div>
            
            
          
          
        </div>
        </div>
        </div>
      
    );
  }
}

export default App;



