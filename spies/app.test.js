const sinon = require('sinon');
const expect = require('expect.js');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: sinon.spy()
    };

    app.__set__('db', db);

    it('should call saveUser with user object on db', () => {
        let email = 'vlad@abc.com';
        let password = 'abc123';
        app.handleSignup(email, password);
        sinon.assert.calledWithMatch(db.saveUser, {email, password});
    });

    it('should call the spy correctly', () => {
        let spy = sinon.spy();
        spy();
        sinon.assert.calledOnce(spy);
    });

});