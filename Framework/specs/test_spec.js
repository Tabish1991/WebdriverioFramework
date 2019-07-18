describe('Cherchertech Home Page', () => {
	it('Get title of cherchertech Home page', () => {
		browser.url('https://chercher.tech/')
		const title = browser.getTitle()
		console.log('Title is: ' + title)
	})
})