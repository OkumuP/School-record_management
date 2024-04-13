from flask import Flask, render_template, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'your_mysql_username'
app.config['MYSQL_PASSWORD'] = 'your_mysql_password'
app.config['MYSQL_DB'] = 'school_records'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_student', methods=['POST'])
def add_student():
    try:
        # Get data from request
        name = request.form['name']
        age = request.form['age']
        admission_date = request.form['admission_date']
        class_ = request.form['class']
        parent_name = request.form['parent_name']
        parent_contact = request.form['parent_contact']

        # Insert data into database
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO students (name, age, admission_date, class, parent_name, parent_contact) VALUES (%s, %s, %s, %s, %s, %s)", (name, age, admission_date, class_, parent_name, parent_contact))
        mysql.connection.commit()
        cur.close()

        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
