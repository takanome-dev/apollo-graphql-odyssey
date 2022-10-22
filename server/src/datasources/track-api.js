const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }

  getTrack(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${encodeURIComponent(trackId)}/modules`);
  }
}

module.exports = TrackAPI;
