# ✔️ Fakeflix 영화 웹사이트

<br/>
<br/>

## 1. Project

### 1-1. Project Description

Fakeflix는 React에 더 익숙해지고자 개인 프로젝트로 만든 Netflix 클론 웹사이트입니다.

-   TMDB API를 사용해 전반적인 데이터 처리 및 사용
-   SCSS와 Material UI를 통해 디자인 구현
-   npm-react-youtube을 사용해서 트레일러로 사용되는 영상을 실행할 수 있게 구축
-   Dotenv로 사용자에게 API관련 정보를 가리고 Firebase Token을 사용해서 민감한 정보 가리기
    많이 사용해 봤던 MongoDB에서 벗어나 새로운 DB를 통해 장점/단점을 보고 싶어서 Firebase로 구축
-   영화 API에서 사용되는 데이터는 반복적으로 사용되기 때문에 잘 구현하면 더 사용하기 편리한 Firebase 선택
-   사용하면서 장점: 실시간 데이터를 통해 빠른 반영, Authentication에 있어서 더 빠름, 배우고 Setup하기 비교적 편리함
-   단점: MongoDB에 비교해서는 보안 규칙이 까다로워서 신경을 더 써야됐다, 만약 더 다양한 Data를 처리 해야된다면 성능/가격적 문제가 고려 될수도 있다반응형 웹 디자인 및 퍼블리싱 작업을 진행했습니다.

<br/>

- React
    - Project was built with React using SCSS and Material UI to assist design
    - Services with TMDB API to obtain & use movie data
    - Trailer and Video was completed with npm-react-youtube within the movie-details component
    - Environment variables for API within Dotenv & Firebase Token Security for sensitive information
- DB
    - Instead of MongoDB, I wanted to try something new which I implemented the project with Firebase
    - I chose Firebase because I wouldn't be using a diverse amount of data which if well structured would
      make it easier for me to handle data.
    - Advantages: Real-Time Data, Authentication, Easy to Setup,
    - Disadvantages: Security Rules were a bit complex compared to MongoDB, If more data were added performance would cause an issue

<br/>
<br/>

## 2. Skills

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-bf4080?style=for-the-badge&logo=Sass&logoColor=ffffff)
![JAVASCRIPT](https://img.shields.io/badge/JavaScript-f6e158?style=for-the-badge&logo=JavaScript&logoColor=ffffff)
![Git](https://img.shields.io/badge/Git-f05032?style=for-the-badge&logo=git&logoColor=ffffff)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)

<br/>
<br/>

## 3. Main Features

0. [TMDB_API-Authorization] (#3-0-handle-data)
1. [Homepage](#3-1-handle-homepage)
2. [Signup](#3-2-handle-signup)
3. [Signin](#3-3-handle-signin)
4. [MoviePage](#3-4-handle-moviepage)
5. [Likes](#3-5-handle-likes)
6. [EachMovie](#3-6-handle-eachmovie)

## 4. Other
![Firebase]

<br/>
<br/>

### 3-0. Handle Data

<br/>

```js
// 필요한 정보 API를 통해서 받기
const key = process.env.REACT_APP_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key=${key}`,
    topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
    trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=2`,
    comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

export function imageUrl(filename, size) {
    return `https://image.tmdb.org/t/p/${size}/${filename}`;
}
```

<br/>
<br/>

### 3-1. Homepage

![Homepage](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/095b44f4-217a-4f16-a4b6-7f996e5d989b)

<br/>

`handleEmailChange(event)` 유저가 작성하는 이메일을 계속해서 저장하는 함수입니다.
`handlerFormSubmit(event)`을 통해 작성된 정보를 저장해서 /signup 페이지로 이동합니다.

```js
// 필요한 변수
const [email, setEmail] = useState("");
const [buttonClicked, setButtonClicked] = useState(false);
const emailRef = useRef(null);
const navigate = useNavigate();
const { user } = UserAuth() || {};

// 만약 유저가 이미 로그인이 되어 있거나 정보가 확인 되면 /home으로 router 이동
if (user) {
    navigate("/home");
}

// 이메일 적는 정보에 Form을 배치해서 정보를 얻어내기
function handlerFormSubmit(event) {
    event.preventDefault();
    setButtonClicked(true);
    if (emailRef.current.validity.valid) {
        console.log("Form submitted with valid email:", email);
        navigate("/signup");
    } else {
        console.log("Invalid email:", email);
    }
}

// 완료 버튼을 누르기 전에 유저가 수정을 하는 이메일을 저장하고 setEmail()에 저장
function handleEmailChange(event) {
    setEmail(event.target.value);
    setButtonClicked(false);
}
```

<br/>
<br/>

### 3-2. Signup

![Signup](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/9d63a009-7a4f-4be6-a11a-65a90fe52cae)

Signup은 유저가 계정을 만들기 위해 필요한 정보를 수집하고, 유저에게 맞는 영화 플랜을 정해서 보여지는 컨텐츠, 결제 금액 등의 프로세스를 처리합니다.

<br/>

```js
// 이메일 비밀번호를 확인하기 위한 함수
const [isVisible, setIsVisible] = useState(null);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [agreement, setAgreement] = useState(false);
const [isEmailValid, setIsEmailValid] = useState(null);
const [isPasswordValid, setIsPasswordValid] = useState(null);

const navigate = useNavigate();

// 정보가 알맞을때만 다음 화면으로 넘어갈 수 있게 확인
useEffect(() => {
    setIsVisible(true);
}, []);

// 이메일이 수정되는 정보를 실시간으로 업데이트
const handleEmailChange = (e) => {
    setEmail(e.target.value);
};

// 비밀번호 역시 실시간으로 업데이트
const handlePasswordChange = (e) => {
    setPassword(e.target.value);
};

// 유효한 이메일인지 확인
const validateEmail = (value) => {
    const trimmedValue = value.trim();
    console.log("Trimmed value:", trimmedValue);
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue);
    setIsEmailValid(isValid);
};

// 유효한 비밀번호인지 확인
const validatePassword = (value) => {
    const isValid = value.length >= 8;
    setIsPasswordValid(isValid);
};

// 정보가 유효하다면 다음 페이지로 넘어가기 위한 정보 처리
const handleFormSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);
    if (isEmailValid === true && isPasswordValid === true) {
        setIsVisible(false);
        setTimeout(() => {
            navigate("/Step2-Info", { state: { email, password } });
        }, 200);
    } else if (isEmailValid === false) {
        setIsEmailValid(false);
    } else if (isPasswordValid === false) {
        setIsPasswordValid(false);
    }
};
```

<br/>

Planform 역시 Signup에서 필요한 플랜을 정하는 페이지입니다.

```js
// task 객체 구성
const [isVisible, setIsVisible] = useState(null);
const [selectedPlan, setSelectedPlan] = useState(1);
const navigate = useNavigate();
const location = useLocation();

const { email, password } = location.state;

const one = data.one;
const two = data.two;
const three = data.three;

// 오른쪽에서 왼쪽으로 들어오는 애니메이션 구현
useEffect(() => {
    setTimeout(() => {
        setIsVisible(true);
    }, 100);
}, []);

// 플랜을 선택한 후 다음 페이지로 넘어가기
const handleNavigate = () => {
    setIsVisible(false);
    setTimeout(() => {
        console.log(email, password);
        navigate("/selectpay", { state: { email, password } });
    }, 300);
};

// 플랜 선택하기 (클릭으로 선택 가능)
const handlePlanClick = (planIndex) => {
    setSelectedPlan(planIndex);
};
```

<br/>

결제하는 부분은 실제로 구현하기가 어려워서 결제 후 처리하는 화면을 만들었습니다.

```js
const [isVisible, setIsVisible] = useState(null);
const navigate = useNavigate();
const location = useLocation();

const { user, signUp } = UserAuth();
const { email, password } = location.state;

useEffect(() => {
    setTimeout(() => {
        setIsVisible(true);
    }, 100);
}, []);

const handleNavigate = async () => {
    setIsVisible(false);

    try {
        await signUp(email, password);
    } catch (err) {
        console.log(err);
        navigate("/step1");
    }

    setTimeout(() => {
        navigate("/payment-loading");
    }, 200);
};
```

<br/>
<br/>

### 3-3. Signin

![Signin](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/71cd5557-0ebb-46a7-8828-ebfcf53bfb51)

`handleFormSubmit()` 함수를 통해 기존 유저인지 확인하고 맞다면 /home 페이지로 이동하도록 설정했습니다. 만약 유효하지 않은 이메일/비밀번호라면 오류 메세지가 유저에게 보여집니다.

<br/>

```js
// 필요한 변수
const [rememberLogin, setRememberLogin] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

// User Authentication에 필요한 정보를 받아오기 (Firebase)
const { user, logIn } = UserAuth();
const navigate = useNavigate();

// 유효한 정보인지 확인
const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
        await logIn(email, password);
        navigate("/home");
    } catch (err) {
        console.log(err);
    }
};
```

<br/>
<br/>

### 3-4. Movie Page

![MoviePage](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/f35fff14-1e14-4919-a329-715b479e64ae)

사용자가 로그인을 한 후, 모든 정보를 한눈에 볼 수 있는 페이지. 이 웹페이지에서 영화를 보거나 프로필을 누르면 더 자세한 영화 정보를 확인(재생)할 수 있고, 프로필을 통해 미리 저장한 영화 정보도 확인 가능합니다.

<br/>

```js
// 모든 영화 정보 가져오기
const Home = () => {
    return (
        <div>
            <MovieTop />
            <MovieRow title="upcoming" url={endpoints.upcoming} />
            <MovieRow title="trending" url={endpoints.trending} />
            <MovieRow title="topRated" url={endpoints.topRated} />
            <MovieRow title="comedy" url={endpoints.comedy} />
            <MovieRow title="popular" url={endpoints.popular} />
        </div>
    );
};
```

<br/>

각 MovieRow 컴포넌트는 줄을 만들어서 왼쪽 오른쪽으로 이동이 가능한 UI를 만들었습니다. 이를 통해 더 많은 영화를 페이지에 담을 수 있고, 관심 있는 분야로 설정해 더 빠르게 원하는 영화를 찾을 수 있게 도와줍니다.

```js
const [movies, setMovies] = useState([]);
const [isHovered, setIsHovered] = useState(false);
const rowId = Math.floor(Math.random() * 1000);

useEffect(() => {
    fetch(url)
        .then((res) => res.json())
        .then((res) => setMovies(res.results));
}, [url]);

// 양옆으로 영화를 움직이는 UI
const slide = (offset) => {
    const slider = document.getElementById(`slider-${rowId}`);
    slider.scrollLeft = slider.scrollLeft + offset;
};
```

<br/>
<br/>

### 3-5. Likes

![Likes](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/2ceb454e-bdcf-4aed-afa1-729147af073f)

유저가 Profile에 저장할 수 있도록 라이크 (하트)를 구현하고 이를 클릭하면 바꿀수 있도록 만들었습니다. 또한 라이크를 누른 영화 정보를 Firebase DB에 저장하도록 설정해서 다음에 유저가 접속한다면 기존 정보를 기억할 수 있게 구현했습니다.

```js
const [movies, setMovies] = useState([]);
const { user, logOut } = UserAuth();
const navigate = useNavigate();

useEffect(() => {
    onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) {
            setMovies(doc.data().favShows);
        }
    });
    console.log(movies);
}, [user?.email, movies]);

if (!user) {
    return (
        <>
            <p>fetching shows...</p>
        </>
    );
}

const handleClick = (movie) => {
    navigate("/movie-page", { state: { movie: movie } });
};

const handleLogout = async () => {
    try {
        await logOut();
        navigate("/");
    } catch (err) {
        console.log(err);
    }
};
```

<br/>
<br/>

### 3-6. Movie

![EachMovie](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/75f7a144-252a-4625-8df9-9054131485b8)

한가지의 영화가 선택 되었을때 영화 기본 정보, 배우 정보, 포스터, 트레일러, 실제 영화 시청이 포함된 페이지입니다. 많은 정보가 필요한 만큼, API와의 소통을 줄여서 속도를 개선하고 영화를 실제로 튼다면 어떻게 보여질지 트레일러로 구현 했습니다.

<br/>

select 요소에 `onchange` 이벤트를 등록하여 `sortTasks()` 함수로 backlog(0), progress(1), complete(2)의 index를 전달합니다.

```js
const [movie, setMovie] = useState({});
const [credits, setCredits] = useState({});
const [poster, setPoster] = useState({});
const [isLoading, setIsLoading] = useState(true);
const [showVideo, setShowVideo] = useState(false);

const location = useLocation();
const movieId = location.state;
const { id } = movieId.movie;

useEffect(() => {
    const fetchData = async () => {
        try {
            const detailedResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?&append_to_response=videos&api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            const detailedData = await detailedResponse.json();
            setMovie(detailedData);

            const creditsResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            const creditsData = await creditsResponse.json();
            setCredits(creditsData.cast.slice(0, 8));

            const posterResponse = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            const posterData = await posterResponse.json();
            setPoster(posterData.posters.slice(0, 8));

            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [id]);

if (isLoading) {
    return <div>Loading...</div>; // Display loading indicator
}

const handleAlert = () => {
    alert("One day we might have a movie.");
};

const handleClick = () => {
    console.log(movie.videos.results[0].key);
    setShowVideo(true);
};

const handleClose = () => {
    setShowVideo(false);
};
```

<br/>
<br/>

## 4. Other

### 4-1. Firebase DB

![Firebase]

기존에 많이 사용했던 MongoDB에서 떨어져 다른 DB를 사용하고 싶었습니다. 다양하지 않은 주제의 데이터를 처리하고, 각 유저마다 특수한 정보가 많을거라고 예상을 했기 때문에 보안을 신경을 더 많이 쓸 수 있고 Authentication이 빠른 Firebase를 선택했습니다

사용을 하면서 실시간 데이터를 통해 빠른 반영을 할 수 있어서 좋았지만, 보안 규칙이 정말 까다롭고 데이터가 늘어난다고 가정하면 성능/가격의 문제가 고려 될 수 도 있다고 생각합니다

<br/>
<br/>

### 4-2. Responsive Web Design

Fakeflix 반응형 웹 사이트입니다. 모바일 환경에서 접속 시 기능하도록 구현하였습니다. 이로써 사용자가 웹 사이트를 더 편리하게 이용할 수 있습니다.

<br/>
<br/>