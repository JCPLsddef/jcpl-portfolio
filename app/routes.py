from flask import Blueprint, request, jsonify
from app import db
from app.models import Person

bp = Blueprint('api', __name__, url_prefix='/')


@bp.route('/people', methods=['GET'])
def get_people():
    people = Person.query.all()
    return jsonify([{'id': p.id, 'name': p.name} for p in people])


@bp.route('/people', methods=['POST'])
def add_person():
    data = request.get_json()
    if not data or 'name' not in data:
        return jsonify({'error': 'Name is required'}), 400

    person = Person(name=data['name'])
    db.session.add(person)
    db.session.commit()
    return jsonify({'id': person.id, 'name': person.name}), 201
