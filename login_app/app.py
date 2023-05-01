from flask import Flask, render_template, request, redirect, url_for
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://localhost:27017/')
db = client['login_app']


@app.route('/')
def login():
    return render_template('login.html')


@app.route('/login', methods=['POST'])
def authenticate():
    email = request.form['email']
    password = request.form['password']
    user = db.users.find_one({'email': email, 'password': password})
    if user:
        return redirect(url_for('success'))
    else:
        return redirect(url_for('failure'))


@app.route('/success')
def success():
    return 'Login successful!'


@app.route('/failure')
def failure():
    return 'Invalid email or password.'


if __name__ == '__main__':
    app.run(debug=True)
