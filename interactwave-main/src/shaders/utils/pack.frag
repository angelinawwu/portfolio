// vec2 rgba2vec(vec4 rgba){
//     // return rgba.xy;
//     return vec2(
//         rgba.r + rgba.g / 255.0,
//         rgba.b + rgba.a / 255.0
//     )-0.5;
// }

// vec4 vec2rgba(vec2 vec){
//     // return vec4(vec, 0, 0);
//     vec = clamp(vec, -0.5, 0.5);
//     vec = vec + 0.5;
//     vec = vec * 255.0;
//     float x = floor(vec.x);
//     float y = floor(vec.y);
//     return vec4(
//         x / 255.0,
//         vec.x - x,
//         y / 255.0,
//         vec.y - y
//     );
// }

vec2 rgba2vec(vec4 rgba){
    float mag = rgba.r + rgba.g / 255.0;
    vec2 d = normalize(rgba.ba - 0.5);
    return mag * d;
}

vec4 vec2rgba(vec2 vec){

    float mag = length(vec)*255.0;
    float scale = max(abs(vec.x), abs(vec.y));
    float dx = vec.x / scale / 2.0;
    float dy = vec.y / scale / 2.0;

    float mag0 = floor(mag);

    return vec4(
        mag0 / 255.0,
        mag - mag0,
        dx+0.5,
        dy+0.5
    );
}