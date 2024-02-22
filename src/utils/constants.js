export const LOGO ="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png"
export const  USER_AVATAR ="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"
export const API_OPTIONS ={
    method:'GET',
    headers:{
        accept:'application/json',
        Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
    }
};

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w780";

export const BG_URL =
"https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANGUAGES =[{
    identifier:"en" ,name:"English"
},{
    identifier:"hindi" ,name:"Hindi"
},{
    identifier:"spanish" ,name:"Spanish"
}];


export const OPENAI_KEY =process.env.REACT_APP_OPENAI_KEY;