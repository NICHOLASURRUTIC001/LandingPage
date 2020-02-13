import React from "react";
import { Navbar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<>
			<Navbar />
			<div className="d-flex justify-content-center">
				<Jumbotron />
			</div>

			<div className="d-flex justify-content-center">
				<Card
					link="http://www.4geeksacademy.com"
					title="4 Geeks Academy"
					imgURL="https://s3.amazonaws.com/bloc-global-assets/almanac-assets/bootcamps/logos/000/002/594/original/4-Geeks-Academy.png?1467187267"
					buttonColor="primary"
				/>
				<Card
					link="http://www.google.com"
					title="Google"
					imgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUVMjk2HSvZEUNyvC388pgA1Ndlw6f-O8wf8AXvhz7pamaqqzs"
					buttonColor="secondary"
				/>
				<Card
					link="http://www.github.com"
					title="Github"
					imgURL="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
					buttonColor="primary"
				/>
			</div>
		</>
	);
}
