import './html-equal.js';
import makeHtmlTemplate from '../src/create-html-element.js';

const test = QUnit.test;

QUnit.module('testing populating objects within an array using HTML');

const image = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
};

test('make it work', assert => {
    // Arrange
    const expected = `
    <li>
    UniWhal
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>    
    `;
    // Act
    const result = makeHtmlTemplate(image);
    // Assert
    assert.htmlEqual(result, expected);
});