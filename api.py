from flask import Flask
from flask_restx import Api, Resource, fields

app = Flask(__name__)
api = Api(app, doc='/swagger')


ns = api.namespace('tasks', description='Task operations')


task_model = api.model('Task', {
    'id': fields.Integer(required=True, description='The task identifier'),
    'task': fields.String(required=True, description='The task details')
})


tasks = []

@ns.route('/')
class TaskList(Resource):
    @ns.doc('list_tasks')
    @ns.marshal_list_with(task_model)
    def get(self):
        '''List all tasks'''
        return tasks

    @ns.doc('create_task')
    @ns.expect(task_model)
    @ns.marshal_with(task_model, code=201)
    def post(self):
        '''Create a new task'''
        task = api.payload
        tasks.append(task)
        return task, 201

@ns.route('/<int:id>')
@ns.response(404, 'Task not found')
@ns.param('id', 'The task identifier')
class Task(Resource):
    @ns.doc('get_task')
    @ns.marshal_with(task_model)
    def get(self, id):
        '''Fetch a task given its identifier'''
        for task in tasks:
            if task['id'] == id:
                return task
        api.abort(404, "Task not found")

    @ns.doc('delete_task')
    @ns.response(204, 'Task deleted')
    def delete(self, id):
        '''Delete a task given its identifier'''
        global tasks
        tasks = [task for task in tasks if task['id'] != id]
        return '', 204

    @ns.expect(task_model)
    @ns.marshal_with(task_model)
    def put(self, id):
        '''Update a task given its identifier'''
        for task in tasks:
            if task['id'] == id:
                task.update(api.payload)
                return task
        api.abort(404, "Task not found")


api.add_namespace(ns)

if __name__ == '__main__':
    app.run(debug=True)
