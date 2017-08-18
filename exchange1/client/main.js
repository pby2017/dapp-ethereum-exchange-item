import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor'

import './main.html';

RegItem = new Mongo.Collection("regItem");
