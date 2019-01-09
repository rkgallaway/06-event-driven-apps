'use strict';

jest.mock('fs');

const file = require('./../file.txt'); //work out path
console.log('file', file);

describe('files module', () =>{
  it('can load a file', () =>{
    return file.loafFile('foo.txt')
      .then(contents => {
        expect(Buffer.isBuffer(contents)).toBeTruthy();
      });
  });

  it('can save a file', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return file.saveFile('foo.txt', b)
      .then(success => {
        expect(success).toBeUndefined();
      })
      .catch( err => {
        expect(err).toBeUndefined();
      });
  });
  it('raises an error if a file is invalid', () => {
    const str = 'test words';
    const b = Buffer.from(str);
    return file.saveFile(undefined, b)
      .then(success => {
        expect(success).toBeUndefined();
      })
      .catch( err => {
        expect(err).toBeUndefined();
      });
  });

  it('can uppercase a buffer', () => {
    const str = 'test words';
    const STR = 'TEST WORDS';
    const b = Buffer.from(str);
    const B = Buffer.from(STR);
    expect(file.convertBuffer(b)).toEqual(B);
  });
});

