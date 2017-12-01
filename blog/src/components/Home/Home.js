import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import axios from 'axios';


class Home extends Component {
    state = {
      posts: []
    };

    componentDidMount(){
        axios.get('http://localhost:3009/posts').then(
            res => {
                this.setState({
                    posts: res.data
                });
            }
        );
    }

    render(){

        const posts = this.state.posts;
        // console.log(posts);
        const postlist = posts.map((value, index, array)=>{
            // console.log(value);
            return (
                <Link key={index} className='post-link' to={`/post/${value.id}`}>
                    {value.title}
                </Link>
            );
        });

        return (
            <div className='home'>
                <div className='post-list'>
                    {postlist}
                </div>
            </div>
        )
    }
}

export default Home;
