import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","FirstWebsite.avif","OpenPeepsAvatar.png","OpenPeepsBust.png"]),
	mimeTypes: {".png":"image/png",".avif":"image/avif"},
	_: {
		client: {"start":"_app/immutable/entry/start.710ec0da.js","app":"_app/immutable/entry/app.03ceb2c4.js","imports":["_app/immutable/entry/start.710ec0da.js","_app/immutable/chunks/index.9713911f.js","_app/immutable/chunks/singletons.e97d42c3.js","_app/immutable/chunks/index.47a1fd14.js","_app/immutable/entry/app.03ceb2c4.js","_app/immutable/chunks/index.9713911f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
