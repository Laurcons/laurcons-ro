
import css from "../styles/Home.module.scss";
import profilePic from "../public/profile.jpg";
import Image from "next/image";
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import aos from 'aos/dist/aos.js';
import { useEffect } from "react";
import classnames from "classnames";
import { GetServerSideProps } from "next";
import { Mysql } from "../lib/database";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Head from "next/head";
import { ParseDbProject, SerializableProject } from "../lib/dbtypes";
import { DateTime } from "luxon";

const aboutTextboxes = [
	<>
		<h3>I am curious</h3>
		<p>I like to look around and learn whatever I can, from anything I can, however I can 🎃</p>
	</>,
	<>
		<h3>I am creative</h3>
		<p>I can come up with some pretty weird stuff if I try hard enough 🔒🔨</p>
	</>,
	<>
		<h3>I am open</h3>
		<p>I welcome innovation, and I always try new ways of doing mundane stuff, maybe I'll find something more efficient 👾</p>
	</>,
	<>
		<h3>I am communicative</h3>
		<p>I try to be social, and communicate with people, because communication is key in any situation ✅</p>
	</>,
	<>
		<h3>I am organized</h3>
		<p>I strive to be organized, and to make my code as tidy and as readable as possible. I don't always succeed, but I try 🧼</p>
	</>,
	<>
		<h3>I am a beginner</h3>
		<p>
			Even though I consider that I know a lot of stuff regarding programming, I haven't yet worked in any programming enviroment, and I'm sure
			that I still have a lot to learn about this profession 🧡
		</p>
	</>,
	<>
		<h3 className="mb-0">I know:</h3>
		<p><small className="text-muted">at various proficiency levels</small></p>
		<p>Web Development: JavaScript, TypeScript, HTML/CSS</p>
		<p>Windows Development: C#, Unity</p>
	</>
];

const featuredProjects = [7, 12, 14];

export const getServerSideProps: GetServerSideProps = (context) => {
	return new Promise((resolve, reject) => {
		Mysql.query("SELECT * FROM projects;", function(err, results: any[], fields) {
			if (err) reject(err);
			resolve({
				props: {
					dbProjects: results.map(ParseDbProject)
				}
			});
		});
	});
};

export default function Home(props: 
	{ dbProjects: SerializableProject[] }
) {
	useEffect(() => {
		aos.init();
	}, []);
	const age = (() => {
		const bday = DateTime.fromISO("2003-06-26");
		const diff = bday.diffNow("years");
		return Math.floor(-1 * diff.years);
	})();
	return <>
		<Head>
			<title>Laurcons Personal</title>
		</Head>
		<main className="py-2">
			<div className={`${css.header} d-flex flex-column justify-content-center`}>
				{/* <div className="alert alert-info">
					Hi! This website is a work in progress, and I'm no frontend dev, so I'm trying my best. Bear with me!
				</div> */}
				<div className={`border border-primary bg-white rounded p-3 py-5 d-flex flex-md-row flex-column justify-content-around`}>
					<div className="me-3">
						<h1 id="home" className={classnames("display-3", css.scrollableTo)}>Hi! I'm a dev.</h1>
						<p className="lead">I'm {age === 18 ? "an" : "a"} {age} year old aspiring programmer, who likes to code for fun.</p>
					</div>
					<Image
						src={profilePic}
						className="img-thumbnail"
						height="200px"
						width="200px"
					/>
				</div>
				<div className={`${css.scrollDown} d-md-block d-none`}>
					Scroll down
					<div className="animate__animated animate__wobble animate__delay-5s mx-auto" style={{width: "50px"}}>
						&#x21d3;
					</div>
				</div>
			</div>
			<div>
				<div className="py-5 text-center">
					<h1 id="aboutMe" className={css.scrollableTo}>About me</h1>
				</div>
				{aboutTextboxes.map((tb, index) => (
					<div className={classnames({
						[css.textblockContainer]: true,
						[css.textblockRight]: index % 2
					})} key={index}>
						<div data-aos="fade-up" className={css.textblock}>
							{tb}
						</div>
					</div>
				))}
				<div className="py-5 text-center">
					<h1 id="projects" className={css.scrollableTo}>Project highlights</h1>
				</div>
				<div className="d-flex flex-md-row flex-column mb-2">
					{featuredProjects.map((id, index) => {
						const project = props.dbProjects.find(p => p.id === id);
						if (project === undefined)
							return;
						return <>
							<div className={classnames({"card w-100": true, "mx-md-2": index === 1})} data-aos="fade-up" key={index}>
								<div className="card-body">
									<div className="h3">{project.title}</div>
									<div><ReactMarkdown>{project.shortDescMarkdown}</ReactMarkdown></div>
									<Link href={`/projects/${id}`}>
										<a className="btn btn-primary float-end">View project</a>
									</Link>
									<small className="text-muted">
										Published: {project.creationDateStr}<br />
										Updated: {project.updateDateStr}
									</small>
								</div>
							</div>
						</>;
					})}
				</div>
				<Link href="/projects">
					<a className="btn btn-primary float-end" data-aos="fade-up">See more</a>
				</Link>
			</div>
		</main>
	</>;
}
