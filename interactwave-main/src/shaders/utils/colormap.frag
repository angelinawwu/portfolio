vec4 colormap(float x) {
	vec3 color = mix(
		vec3(1, 0.1, 0),
		vec3(0, 0.1, 1),
		x+0.5
	) * abs(x)*2.0;
	color = mix(
		color,
		vec3(0.9),
		clamp((abs(x)-0.5)*2.0, 0.0, 1.0)
	);
	return vec4(color, 1.0);
}