@echo off

REM Docker Compose 실행 스크립트

REM 프로젝트 디렉토리로 이동

REM Docker Compose를 사용하여 컨테이너 시작
:start
docker-compose up -d
echo Containers are up and running.
exit /b 0

REM Docker Compose를 사용하여 컨테이너 중지
:stop
docker-compose down
echo Containers have been stopped and removed.
exit /b 0

REM 스크립트 실행 옵션에 따라 작업 수행
IF "%1"=="start" goto start
IF "%1"=="stop" goto stop
echo Usage: script.bat {start|stop}
exit /b 1
