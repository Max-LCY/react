import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class Dishdetail extends Component {

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    renderComments(dish) {
        if (dish.comments != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                            {new Intl.DateTimeFormat("en-GB", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            }
            );
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        if (dish == null) {
            return (
                <div></div>
            )
        }
        return (
            <div class="container">
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish)}
                </div>
            </div>
        );
    }

}

export default Dishdetail;