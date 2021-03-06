import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('jobs', function() {
    this.route('add', { path: '/add' });
    this.route('show', { path: '/:id' });
    this.route('delete', { path: '/delete/:id' });
  });
  this.route('results', function() {
    this.route('show', { path: '/:id' });

  });
  this.route('environments', function() {
    this.route('add', { path: '/:id'});
    this.route('show', { path: '/:id' });
  });
});

export default Router;
