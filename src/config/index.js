let baseUrl

if (process.env.NODE_ENV === 'development') {
	baseUrl = '/api/';
} else if (process.env.NODE_ENV === 'production'){
  baseUrl = 'http://software.fomifx.com/';
}
export {
	baseUrl
}
