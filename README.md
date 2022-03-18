# `You and Tube`

### a) Clone Repository:
    git clone https://github.com/almost-wiz/You-and-tube
#
### b) Setup server-side:

1. Update `/server/.env` file using `/server/.env.example`
2. Install `requirements.txt`
3. Up docker containers: `docker-compose up -d`
4. Migrate database:
    - `python manage.py makemigrations`
    - `python manage.py migrate`
5. Run server: `python manage.py runserver`
6. Run celery: `celery -A you_and_tube worker -l info -P eventlet`
#
### c) Setup client-side:

1. Install dependencies: `npm install`
2. Run client: `npm run start`
#
### d) Enjoy :D
