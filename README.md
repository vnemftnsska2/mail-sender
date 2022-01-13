### Mail-Sender

## 스토리

 Mail-Sender를 만들게 된 배경은 여자친구 회사에서 사원번호로 파일명이 되어있는
파일(ex. 사원번호_급여명세서.pdf)을 전 사원에게 보내야 하는데 반복적인 노동을 하지 않도록 하기 위해,
파일명과 사원번호를 매칭하여 메일을 보내는 기능을 구현

## 개발환경

- NodeJS
- mariadb

## 주요 라이브러리

- nodemailer
- mysql

# TODO

- v 1.0.0
    - [x]  outlook 계정으로 이메일을 전송하는 기능
    - [x]  파일 첨부 기능
    - [ ]  xlsx 파일을 import 시켜 “employee” 테이블에 사원 정보를 등록시키는 기능
    - [ ]  DB 데이터 조회 및 DB 내 사원번호와 매칭하여 파일을 전송하는 기능으로 마무리
- v 1.1.0
    - [ ]  

## 테스트

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d78e7d5-6d17-4326-bcb1-2582bb0b680b/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ffc7fb8-ccf9-42e3-819a-56317cb3f39d/Untitled.png)