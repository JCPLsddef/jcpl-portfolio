import os
import pytest
from app import create_app, db
from app.models import Person
from config import Config


class TestConfig(Config):
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://user:password@localhost:5432/testdb"
    )
    TESTING = True


@pytest.fixture(scope='module')
def app_fixture():
    app = create_app(TestConfig)
    with app.app_context():
        db.create_all()
        yield app
        db.session.remove()
        db.drop_all()


@pytest.fixture(scope='module')
def client_fixture(app_fixture):
    return app_fixture.test_client()


def test_get_people_empty(client_fixture):
    response = client_fixture.get('/people')
    assert response.status_code == 200
    assert response.get_json() == []


def test_add_person(client_fixture):
    response = client_fixture.post(
        '/people',
        json={'name': 'Alice'},
        content_type='application/json'
    )
    assert response.status_code == 201
    data = response.get_json()
    assert data['name'] == 'Alice'
    assert 'id' in data


def test_add_person_missing_name(client_fixture):
    response = client_fixture.post(
        '/people',
        json={},
        content_type='application/json'
    )
    assert response.status_code == 400


def test_get_people_after_add(client_fixture):
    response = client_fixture.get('/people')
    assert response.status_code == 200
    data = response.get_json()
    assert len(data) >= 1
    names = [p['name'] for p in data]
    assert 'Alice' in names
