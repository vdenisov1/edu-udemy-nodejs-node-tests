const expect = require('expect.js');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            const res = utils.add(33, 11);
            expect(res).to.be.a('number');
            expect(res).to.be(44);
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).to.be(7);
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            const res = utils.square(5);
            expect(res).to.be.a("number");
            expect(res).to.be(25);
        });

        it("should async square a number", (done) => {
            utils.asyncSquare(4, (square) => {
                expect(square).to.be(16);
                done();
            });
        });
    })

    it('should verify first and last names are set', () => {
        const user = { location: 'New York', age: 28 };
        utils.setName(user, 'Vlad Denisov');
        expect(user).to.have.property('firstName');
        expect(user).to.have.property('lastName');
        expect(user.firstName).to.be('Vlad');
        expect(user.lastName).to.be('Denisov');
    });
});