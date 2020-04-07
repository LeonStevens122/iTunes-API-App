const expect = require("chai").expect;
const request = require("request");
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { create } from "react-test-renderer";
import { mount } from 'enzyme';
import React from "react";
//import { shallow } from 'enzyme';
import chai from "chai";
import chaiJestSnapshot from "chai-jest-snapshot";

import renderer from "react-test-renderer";


import Searchbar from '../client/src/Components/Searchbar'

describe("Server Status", function () {
  describe("Main page", function () {
    it("status", function (done) {
      request("http://localhost:3001/", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});


it('render SearchBar:', () => {
    const searchTree = renderer.create(<Searchbar />, );
    expect(searchTree.toJSON()).toMatchSnapshot();

});


test('API shoud return JSON String', () => {
    return fetch(' https://itunes.apple.com/search?term=jack+johnson')
        .then(data => data.json())
        .then(dataRecieved => {
            expect(typeof dataRecieved).toBe('object')
        })
})

