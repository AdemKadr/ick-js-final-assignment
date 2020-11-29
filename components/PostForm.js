import React from 'react';

class PostFrom extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <h2>Create a post</h2>
                <div>
                     <label for="title">Title</label>
                    <input type="text" placeholder="Enter title..." value=""required />
                </div>
                <div>
                    <label for="contetnt">Content</label>
                    <input type="textarea" placeholder="Enter Content..."  value=""required />
                </div>

                <button type='submit'>Add</button>

            </form>
        );
    }
}

export default UserForm;