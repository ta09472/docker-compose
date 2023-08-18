#!/bin/bash

# Docker Compose 실행 스크립트
# 아래와 같은 커맨드를 먼저 실행하여 스크립트에 실행권한 부여
# chmod +x script.sh

# Docker Compose를 사용하여 컨테이너 시작
start_containers() {
  docker compose up -d
  echo "Containers are up and running."
}

# Docker Compose를 사용하여 컨테이너 중지
stop_containers() {
  docker compose down
  echo "Containers have been stopped and removed."
}

open_containers() {
  docker exec -it test_DB "bash"
}

# 스크립트 실행 옵션에 따라 작업 수행
case "$1" in
  start)
    start_containers
    ;;
  stop)
    stop_containers
    ;;
  restart)
    stop_containers
    start_containers
    ;;
    open)
    open_containers
    ;;
  *)
    echo "Usage: $0 {start|stop|restart}"
    exit 1
esac

exit 0
