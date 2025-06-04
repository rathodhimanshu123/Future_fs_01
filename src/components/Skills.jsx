import { useState, useEffect, useRef } from 'react';

const skills = [
	{ name: 'React', color: 'from-blue-400 to-blue-600' },
	{ name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
	{ name: 'Tailwind CSS', color: 'from-cyan-400 to-cyan-600' },
	{ name: 'Node.js', color: 'from-green-400 to-green-600' },
	{ name: 'HTML5', color: 'from-orange-400 to-orange-600' },
	{ name: 'CSS3', color: 'from-blue-300 to-blue-500' },
	// Add more as needed
];

const Skills = () => (
	<section id="skills" className="py-20">
		<div className="max-w-4xl mx-auto">
			<h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white tracking-tight">
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
					Skills
				</span>
			</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
				{skills.map((skill) => (
					<div
						key={skill.name}
						className={`rounded-xl shadow-lg p-6 flex items-center justify-center font-bold text-lg text-white bg-gradient-to-br ${skill.color} hover:scale-105 transition-transform duration-300`}
					>
						{skill.name}
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Skills;