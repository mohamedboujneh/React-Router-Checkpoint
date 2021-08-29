import React from "react";

export default class MovieForm extends React.Component {
  state = {
    id:0,
    title: "",
    description: "",
    posterURL: "",
    url:"",
    rating: "",
  };
  
    
     

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id:Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1),
      title: this.state.title,
      description: this.state.description,
      posterURL: this.state.posterURL,
      url:this.state.url,
      rating: this.state.rating,
    });
    this.setState({
      title: "",
      description: "",
      posterURL: "",
      url:"",
      rating: "",
    });
  };

  render() {
    return (


      <form className="row g-3" onSubmit={this.handleSubmit}>

        <div className="col-auto">
          <label className="visually-hidden">Title</label>
          <input type="text" className="form-control" name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="title" required />
        </div>


        <div className="col-auto">
          <label className="visually-hidden">Description</label>
          <input type="text" className="form-control" name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="description" required />
        </div>

        <div className="col-auto">
          <label className="visually-hidden">Url :</label>
          <input type="text" className="form-control" name="url"
            value={this.state.url}
            onChange={this.handleChange}
            placeholder="url" required />
        </div>

        <div className="col-auto">
          <label className="visually-hidden">PosterURL</label>
          <input type="text" className="form-control" name="posterURL" value={this.state.posterURL} onChange={this.handleChange} placeholder="posterURL" required></input>
        </div>
 
        <div className="col-auto">
          <label className="visually-hidden">Rating</label>
          <input type="number" className="form-control" name="rating" value={this.state.rating} onChange={this.handleChange} placeholder="rating" required></input>
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3" onClick={this.handleSubmit}>Add movie</button>
        </div>
        
      </form>


    );
  }
}