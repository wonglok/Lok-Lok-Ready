import fetch from "isomorphic-fetch";
import reduxApi, {transformers} from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";
import 'whatwg-fetch';

var fetchAdapter = function(input, init) {
  init = init || {};
  init.credentials = 'include';
  return window.fetch(input, init);
};

export default reduxApi({
  // simple edpoint description
  posts: {
    url: `/api/posts/:id`,
    crud: true,
    transformer: transformers.array,
    options: {
      headers: {
        "Accept": "application/json"
      }
    }
  },

  // // complex endpoint description
  // regions: {
  //   url: `/api/regions`,
  //   // reimplement default `transformers.object`
  //   transformer: transformers.array,
  //   // base endpoint options `fetch(url, options)`
  //   options: {
  //     headers: {
  //       "Accept": "application/json"
  //     }
  //   }
  // }
}).use("fetch", adapterFetch(fetchAdapter));
// }).use("fetch", adapterFetch(fetch));


