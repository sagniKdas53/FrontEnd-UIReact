import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class Dishdetail extends Component {

  RenderComments({comments}){
    //console.log(comments);
    if (comments == null || comments.length === 0) {
      return (
        <div></div>
      );
    }

    const renderedComments = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
        </li>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {renderedComments}
        </ul>
      </div>
    );
  }

  componentDidMount(){
    console.log("Dishdetail component mounted"); 
  }

  componentDidUpdate(){
    console.log("Dishdetail component updated");
  }

  render() {
    console.log("Dishdetail rendering");
    //console.log(this.props.dish);
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>

          </div>
          <div className="col-12 col-md-5 m-1">
            <this.RenderComments comments={this.props.dish.comments} />
          </div>
          </div>
        </div>);
    }
    else {
      return (
        <div></div>
      );
    }
  }
}

export default Dishdetail;