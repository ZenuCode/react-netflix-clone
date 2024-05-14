# Fakeflix Website

# Webpage Logic
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

# 웹페이지 로직
- React에 더 익숙해지고자 기존에 앵귤러로 만들어 봤던 넷플릭스 클론 코딩
    - TMDB API를 사용해 전반적인 데이터 처리 및 사용
    - SCSS와 Material UI를 통해 디자인 구현
    - npm-react-youtube을 사용해서 트레일러로 사용되는 영상을 실행할 수 있게 구축
    - Dotenv로 사용자에게 API관련 정보를 가리고 Firebase Token을 사용해서 민감한 정보 가리기
- 많이 사용해 봤던 MongoDB에서 벗어나 새로운 DB를 통해 장점/단점을 보고 싶어서 Firebase로 구축
    - 영화 API에서 사용되는 데이터는 반복적으로 사용되기 때문에 잘 구현하면 더 사용하기 편리한 Firebase 선택
    - 사용하면서 장점: 실시간 데이터를 통해 빠른 반영, Authentication에 있어서 더 빠름, 배우고 Setup하기 비교적 편리함
    - 단점: MongoDB에 비교해서는 보안 규칙이 까다로워서 신경을 더 써야됐다, 만약 더 다양한 Data를 처리 해야된다면 성능/가격적 문제가 고려 될수도 있다

# Components
### Homepage
![Homepage](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/095b44f4-217a-4f16-a4b6-7f996e5d989b)


### Signup
![Signup](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/9d63a009-7a4f-4be6-a11a-65a90fe52cae)


### Signin
![Signin](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/71cd5557-0ebb-46a7-8828-ebfcf53bfb51)


### MoviePage
![MoviePage](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/f35fff14-1e14-4919-a329-715b479e64ae)


### Likes
![Likes](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/2ceb454e-bdcf-4aed-afa1-729147af073f)


### EachMovie
![EachMovie](https://github.com/ZenuCode/react-netflix-clone/assets/100235605/75f7a144-252a-4625-8df9-9054131485b8)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Available Scripts
In the project directory, you can run:
### `npm start`

