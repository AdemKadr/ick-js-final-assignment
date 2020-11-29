import React from "react";

class FormPost extends React.Component {
    render(){
        return(
            <form>
                <h2>Creat the post form</h2>
                <div>
                    <lable for="title">Title</lable>
                    <input type="text" placeholder="Enter title" value=""required></input>
                </div>
                <div>
                    <label for="content">Content</label>
                    <input type="content" placeholder="Enter content" value=""required></input>
                </div>
                <button type="submit">Add</button>
            </form>

        );
    }
}


export default FormPost;