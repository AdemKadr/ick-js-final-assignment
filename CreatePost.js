import React from 'react';
import FormPost from './FormPost';
import axios from 'axios';

class CreatePost extends React.Component{
    constructor(){
        super();
        this.state ={
            isLoading: true
            
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }


    componentDidMount(){
        axios
            .get(form.title,form.content)
            .then(res =>{
                this.setState({
                    title:res.data,
                    isLoading:false
                });
            })
            .catch(e =>{
                this.setState({
                    isLoading:false
                });
                alert("Couldn't load text.")
            });
    }

    handleChange(event){
        const title = event.target.title;

        this.setState(prevState =>{
            return {
                form: {
                    ...prevState.form,
                    [title]: event.target.value
                }
            };
        });
    }


    handleSubmit(event){
        event.preventDefault();

        this.setState(prevState =>{
            return{
                form: {
                    title: '',
                    content: ''
                }
            };
        });
    }

    render(){
        if (this.state.isLoading){
            return <h2>Loading</h2>
        }

        return(
            <div>
                <FormPost
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </div>
        );
    }
}
export default CreatePost;
