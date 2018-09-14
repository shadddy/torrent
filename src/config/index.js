let baseUrl

if (process.env.NODE_ENV === 'development') {
	baseUrl = '/api/interface/';
} else if (process.env.NODE_ENV === 'production'){
  baseUrl = 'http://www.fomifx.com/interface/';
}
export {
	baseUrl
}
