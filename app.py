from flask import Flask, render_template
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_sqlalchemy import SQLAlchemy
import api  

app = api.app  


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class TaskModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(200), nullable=False)


admin = Admin(app, name='Admin Panel', template_mode='bootstrap3')
admin.add_view(ModelView(TaskModel, db.session))


print(f"Flask app name: {__name__}")
print(f"App root path: {app.root_path}")

@app.route('/home')
def home():
    return render_template('index.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.debug = True  
    app.run()
