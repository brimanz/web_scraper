'use strict';

const PORT = 5000;
const HOST = 'localhost';

const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

//tutorial 17:50

const app = express();
const url = 'https://www.theguardian.com/international'

axios(url)
	.then(response =>{
		const html = response.data
		const $ = cheerio.load(html)
		const articles = []

		$('.fc-item__title', html).each(function() {
			const title = $(this).text()
			const url = $(this).find('a').attr('href')
			articles.push({
				title,
				url
			})

		})
		console.log(articles);
	}).catch(err => console.log(err))

app.listen(PORT, HOST, () => console.log(`server run on PORT: ${PORT}`))

