import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				style={{ height: "250px" }}
				src={props.imgURL}
			/>
			<div className="card-body bg-info">
				<h5 className="card-title bg-secondary text-center">
					{props.title}
				</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card
					{"'"}s content.
				</p>
				<div className="col text-center">
					<a
						href={props.link}
						className={"btn btn-" + props.buttonColor}>
						Find Out More
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	imgURL: PropTypes.string,
	buttonColor: PropTypes.string
};
